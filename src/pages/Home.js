import React, { useState } from "react";
import Header from "../components/Layout/Header";
import NewProject from "../components/New Project/NewProject";
import ProjectList from "../components/Projects/ProjectList";

const HomePage = (props) => {
  const [readModeState, setReadModeState] = useState(true);

  const readModeChangeHandler = (receivedReadMode) => {
    setReadModeState(!receivedReadMode);
  };

  return (
    <>
      <Header />
      <NewProject />
      <ProjectList
        readMode={readModeState}
        onReadModeChange={readModeChangeHandler}
      />
    </>
  );
};

export default HomePage;
