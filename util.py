import pandas as pd
import json

# This file contains utility functions to extract data from the experiment results.
# Experiment data is written as events into a SQLite database.


def getExperimentSequence(id: str, df: pd.DataFrame) -> str | None:
    # Returns the experiment sequence (AB or BA) for a given experiment ID
    context = df[(df["experiment"] == id) & (df["type"] == "EXPERIMENTSTART")][
        "context"
    ]

    if len(context.index) == 0:
        return None

    context = json.loads(context.iloc[0])

    return context.get("group", None)


def getTaskDurationSeconds(
    experimentId: str, taskId: int, df: pd.DataFrame
) -> float | None:
    # Returns the duration of a task in seconds, based on the difference between the CODEREVEALED and TASKCOMPLETED events
    start = df[
        (df["experiment"] == experimentId)
        & (df["task"] == taskId)
        & (df["type"] == "CODEREVEALED")
    ]
    finish = df[
        (df["experiment"] == experimentId)
        & (df["task"] == taskId)
        & (df["type"] == "TASKCOMPLETED")
    ]

    if len(start.index) == 0 or len(finish.index) == 0:
        return None

    return (float(finish.iloc[0]["time"]) - float(start.iloc[0]["time"])) / 1000


def getTaskCorrectness(
    experimentId: str, taskId: int, df: pd.DataFrame
) -> float | None:
    # Returns the correctness of a task, based on the steps the participant has chosen and their order.
    # The correctness of the order of steps is determined by sorting the existing steps
    # using selection sort and counting the number of swaps needed to get to the correct order.
    finish = df[
        (df["experiment"] == experimentId)
        & (df["task"] == taskId)
        & (df["type"] == "TASKCOMPLETED")
    ]

    if len(finish.index) == 0:
        return None

    context = json.loads(finish.iloc[0]["context"])

    solutionParticipant = context["existingSteps"]
    optionalStepsParticipant = context["optionalSteps"]

    solutionSteps = context["config"]["solutionSteps"]
    allSteps = context["config"]["optionalSteps"]

    correctlyInSolution = [
        step for step in solutionParticipant if step in solutionSteps
    ]
    correctlyInOptional = [
        step for step in optionalStepsParticipant if step not in solutionSteps
    ]

    swapsToCorrect = countSwapsToCorrect(correctlyInSolution, solutionSteps)

    return (len(correctlyInSolution) + len(correctlyInOptional) - swapsToCorrect) / len(
        allSteps
    )


class StepSwapContainer:
    def __init__(self, step, solutionPosition):
        self.step = step
        self.solutionPosition = solutionPosition


def countSwapsToCorrect(stepsToOrder: list, solutionSteps: list) -> int:
    # Returns the amount of swaps needed to get the steps in the correct order,
    # where correct order is defined by the order of the solution steps.
    # The function uses selection sort to determine the amount of swaps needed.
    stepsToOrderWithPosition = [
        StepSwapContainer(step, solutionSteps.index(step)) for step in stepsToOrder
    ]
    swaps = 0

    # See algorithm: https://en.wikipedia.org/wiki/Selection_sort
    aLength = len(stepsToOrderWithPosition)
    for i in range(aLength):
        jMin = i
        for j in range(i + 1, aLength):
            if (
                stepsToOrderWithPosition[j].solutionPosition
                < stepsToOrderWithPosition[jMin].solutionPosition
            ):
                jMin = j
        if jMin != i:
            toSwap = stepsToOrderWithPosition[i]
            stepsToOrderWithPosition[i] = stepsToOrderWithPosition[jMin]
            stepsToOrderWithPosition[jMin] = toSwap
            swaps += 1

    return swaps


def getTaskFromLocation(location: str) -> int | None:
    # Returns the task ID from a location string of the experiment tool.
    # Each task is displayed on the `/u/<task_id>` path.
    pathname = json.loads(location)["pathname"]

    if "/u/" in pathname:
        return int(pathname.split("/u/")[1])

    return None
