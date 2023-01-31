import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectsContext from "./projects-context";

const ProjectsProvider = (props) => {
  const fetchDataHandler = async () => {
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

    setMyProjList(loadedData);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const [myProjList, setMyProjList] = useState([]);

  const itemEditHandler = (id, updProjName, updProjDesc) => {
    const updatedProjectIndex = myProjList.findIndex((item) => item.id === id);
    const updatedProject = myProjList[updatedProjectIndex];

    let updatedItems;

    if (updatedProject) {
      const updatedItem = {
        ...updatedProject,
        projName: updProjName,
        projDesc: updProjDesc,
      };

      updatedItems = [...myProjList];
      updatedItems[updatedProjectIndex] = updatedItem;
    }
    setMyProjList(updatedItems);
  };

  const itemStyledHandler = (id, styledUpd) => {
    const styledProjectIndex = myProjList.findIndex((item) => item.id === id);
    const styledProject = myProjList[styledProjectIndex];

    let styledItems;

    if (styledProject) {
      const styledItem = {
        ...styledProject,
        styled: styledUpd,
      };

      styledItems = [...myProjList];
      styledItems[styledProjectIndex] = styledItem;
    }
    setMyProjList(styledItems);
  };

  const deleteProjectsHandler = () => {
    const filteredProjects = myProjList.filter((item) => item.styled === false);
    setMyProjList(filteredProjects);
  };

  const addProjectHandler = (newProject) => {
    setMyProjList((prevPojects) => {
      return [newProject, ...prevPojects];
    });
  };
  const projectContext = {
    items: myProjList,
    onItemEdit: itemEditHandler,
    onItemStyled: itemStyledHandler,
    onAddProject: addProjectHandler,
    onItemsDelete: deleteProjectsHandler,
  };
  return (
    <ProjectsContext.Provider value={projectContext}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
