import React, { useState } from "react";
import Header from "./components/Layout/Header";
import NewProject from "./components/New Project/NewProject";
import ProjectList from "./components/Projects/ProjectList";
import ProjectsProvider from "./components/context/ProjectsProvider";

const App = () => {
  const [readModeState, setReadModeState] = useState(true);

  const readModeChangeHandler = (receivedReadMode) => {
    setReadModeState(!receivedReadMode);
  };

  return (
    <ProjectsProvider>
      <Header />
      <NewProject />
      <ProjectList
        readMode={readModeState}
        onReadModeChange={readModeChangeHandler}
      />
    </ProjectsProvider>
  );
};

export default App;
