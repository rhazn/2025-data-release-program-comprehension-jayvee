import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { HighlightedTable } from "../components/HighlightedTable";
import { tableData } from "../tasks/config2";

interface Task1PageProps {}

export const Task1Page: FC<Task1PageProps> = ({}: Task1PageProps) => {
    const [input, setInput] = useState<string>("");
    const [status, setStatus] = useState<"error" | "undecided" | "correct">(
        "undecided"
    );
    const navigate = useNavigate();

    const checkSolution = () => {
        const correctSolutions = ["range a3:c6"];

        if (!input || status === "correct") {
            return;
        }
        if (correctSolutions.includes(input.trim().toLocaleLowerCase())) {
            setStatus("correct");
            return;
        }
        setStatus("error");
    };

    return (
        <>
            <h1 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Task 1
            </h1>
            <p className="mb-4 font-light">
                Please complete the data pipeline on the right to select the
                subset of data that is highlighted in{" "}
                <p className="bg-blue-100 inline">blue</p>.
            </p>
            <div className="flex flex-row flex-nowrap mb-4">
                <div className="flex flex-1 justify-center self-start">
                    <HighlightedTable
                        showHeader={false}
                        header={[
                            "name",
                            "mpg",
                            "cyl",
                            "disp",
                            "hp",
                            "drat",
                            "wt",
                            "qsec",
                            "vs",
                            "am",
                            "gear",
                            "carb",
                        ]}
                        data={tableData}
                        highlightStart={[0, 0]}
                        highlightEnd={[1, 1]}
                    />
                </div>
                <div className="flex-1 align-left sticky self-start top-8">
                    <pre className="text-left">
                        block ExperimentDataSelector oftype CellRangeSelector
                        &#123;
                    </pre>
                    <br />
                    <div className="flex flex-row flex-nowrap items-baseline">
                        <pre>&nbsp;&nbsp;&nbsp;&nbsp;select:</pre>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                        />
                        <pre>;</pre>
                    </div>
                    <br />
                    <pre className="text-left">&#125;</pre>
                </div>
            </div>
            {status === "error" && (
                <div className="bg-red-100 p-2 m-2">
                    The solution is not correct, please try again.
                </div>
            )}
            {status === "correct" && (
                <div className="bg-green-100 p-2 m-2">
                    The solution is correct, please continue.
                </div>
            )}
            <button
                type="button"
                disabled={!input || status === "correct"}
                onClick={() => checkSolution()}
                className="text-white disabled:bg-gray-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Check Solution
            </button>
            <br />
            {status === "correct" && (
                <button
                    type="button"
                    disabled={status !== "correct"}
                    onClick={() => navigate("/task-2")}
                    className="text-white disabled:bg-gray-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Continue
                </button>
            )}
        </>
    );
};
