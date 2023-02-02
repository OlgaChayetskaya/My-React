import React, { useState } from "react";
import Header from "../components/Layout/Header";
import NewProject from "../components/New Project/NewProject";
import ProjectList from "../components/Projects/ProjectList";
import axios from "axios";
import { json, useLoaderData } from "react-router-dom";
import ProjectsProvider from "../components/context/ProjectsProvider";

const HomePage = (props) => {
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

export default HomePage;

export const loader = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
    );
    const slicedData = response.data.slice(0, 15);

    let loadedData = [];

    loadedData = slicedData.map((item) => ({
      id: item.Number,
      projName: item.Name,
      projDesc: item.About,
      year: item.MaxHP,
      customer: item.Generation,
      styled: false,
    }));
    console.log("ok");
    return loadedData;
  } catch (error) {
    throw json({ message: "Could not fetch projects" }, { status: 500 });
  }
};
