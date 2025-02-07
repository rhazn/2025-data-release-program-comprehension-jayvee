import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ConsentPage } from "./pages/ConsentPage";
import { EndPage } from "./pages/EndPage";
import React, { useEffect, useState } from "react";
import { saveTimedEvent, EventType } from "./events";
import { PipelineUnderstandingPage } from "./pages/PipelineUnderstandingPage";
import { PreparationPage } from "./pages/PreparationPage";
import {
    Group,
    Language,
    TaskConfig,
    getLanguageSequenceForGroup,
    getTaskConfigs,
} from "./tasks/config";
import { Task1Page } from "./pages/Task1Page";
import { ExperimentMetadataInputPage } from "./pages/ExperimentMetadataInputPage";

export const ExperimentContext = React.createContext<
    { id: string; group: Group; languageSequence: Language[] } | undefined
>(undefined);

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [configs, setConfigs] = useState<TaskConfig[] | undefined>();

    const [experimentId, setExperimentId] = useState<string | undefined>(
        undefined
    );
    const [languageSequence, setLanguageSequence] = useState<
        Language[] | undefined
    >(undefined);
    const [group, setGroup] = useState<Group | undefined>(undefined);

    const onSubmitMetaData = (experimentId: string, group: "AB" | "BA") => {
        window.localStorage.setItem("experimentId", experimentId);
        window.localStorage.setItem("group", group);

        setExperimentId(experimentId);
        setLanguageSequence(getLanguageSequenceForGroup(group));
        setGroup(group);

        saveTimedEvent(experimentId, EventType.EXPERIMENTSTART, location, {
            group,
        });

        navigate("/consent");
    };

    useEffect(() => {
        const experimentId: string | null =
            window.localStorage.getItem("experimentId");
        const group: string | null = window.localStorage.getItem("group");

        if (experimentId) {
            setExperimentId(experimentId);
        }
        if (group == "AB" || group == "BA") {
            setLanguageSequence(getLanguageSequenceForGroup(group));
            setGroup(group);
        }
    }, []);

    useEffect(() => {
        if (group) {
            setConfigs(getTaskConfigs());
        }
    }, [group]);

    useEffect(() => {
        if (experimentId) {
            saveTimedEvent(experimentId, EventType.PAGEENTER, location, {});
        }
    }, [location]);

    return (
        <>
            {(!experimentId || !group) && (
                <ExperimentMetadataInputPage
                    onSubmitMetaData={onSubmitMetaData}
                />
            )}
            {experimentId &&
                languageSequence?.length &&
                group &&
                configs?.length && (
                    <ExperimentContext.Provider
                        value={{
                            id: experimentId,
                            group: group,
                            languageSequence: languageSequence,
                        }}
                    >
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <ExperimentMetadataInputPage
                                        onSubmitMetaData={onSubmitMetaData}
                                    />
                                }
                            />
                            <Route path="/consent" element={<ConsentPage />} />
                            <Route
                                path="/prepare"
                                element={<PreparationPage />}
                            />
                            <Route path="/test" element={<Task1Page />} />
                            {configs.map((config, i) => (
                                <Route
                                    path={`/u/${i}`}
                                    key={`/u/${i + 1}`}
                                    element={
                                        <PipelineUnderstandingPage
                                            config={config}
                                            language={languageSequence[i]}
                                            nextPage={
                                                configs.length === i + 1
                                                    ? `/end/${experimentId}`
                                                    : `/u/${i + 1}`
                                            }
                                        />
                                    }
                                />
                            ))}
                            <Route path="/end" element={<EndPage />} />
                            <Route
                                path="/end/:experimentId"
                                element={<EndPage />}
                            />
                        </Routes>
                    </ExperimentContext.Provider>
                )}
        </>
    );
}

export default App;
