import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProjectsContext from "./projects-context";

const ProjectsProvider = (props) => {
  const data = useLoaderData();
  const [myProjList, setMyProjList] = useState(data);

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
