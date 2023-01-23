import React, { useState } from "react";
import Header from "./components/Layout/Header";
import NewProject from "./components/New Project/NewProject";
import ProjectList from "./components/Projects/ProjectList";

const projects = [
  {
    projName: "WSDR",
    id: "p1",
    customer: "IBM",
    year: 2008,
    projDesc:
      "The objective of the WSDR application is to support the workforce management reporting using a trusted view on workforce supply.",
    styled: false,
  },
  {
    projName: "Metro",
    id: "p2",
    customer: "IBM",
    year: 2009,
    projDesc:
      "Metro is an application that enables the perform operational optimization process within the WMI / HR process architecture.",
    styled: false,
  },
  {
    projName: "GTS Hub",
    id: "p3",
    customer: "IBM",
    year: 2010,
    projDesc:
      "Main goal of the project: develop reports for management that graphically represent current projects state, show state of key parameters that characterize that project, and calculate/show/predict potential impact of that parameters on project cycle/life.",
    styled: false,
  },
  {
    projName: "GBS NA",
    id: "p4",
    customer: "IBM",
    year: 2011,
    projDesc:
      "The main goal of the project is to migrate next group of reports from Brio to Cognos: Opportunities, Management, Resources, Scorecard.",
    styled: false,
  },
  {
    projName: "IPPF",
    id: "p5",
    customer: "IBM",
    year: 2012,
    projDesc:
      "The IPPF solution provides a key resource for project managers and partners to help in managing and controlling project financial and non-financial information through Project Financial Control (planning, reconciliation and forecasting), Non-financial project assessments and Integration with back end systems.",
    styled: false,
  },
  {
    projName: "CGSP",
    id: "p6",
    customer: "IBM",
    year: 2013,
    projDesc:
      "The latest project in the list is IBM CGSP (Client Grows Strategic Planning) provides an integrated collaborative process designed to focus on delivering revenue and signings growth and improving the overall Client Experience.",
    styled: false,
  },
  {
    projName: "Client Care",
    id: "p7",
    customer: "IBM",
    year: 2015,
    projDesc:
      "The SmartCare tool delivers a comprehensive view of a client across all IBM divisions and geographies, providing pro-active access to trusted information and insights.",
    styled: false,
  },
];

const App = () => {
  const [myProjList, setMyProjList] = useState(projects);
  const [readModeState, setReadModeState] = useState(true);
  
  const readModeChangeHandler = (receivedReadMode) => {
    setReadModeState(!receivedReadMode);
  };

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

  const deleteHandler = () => {
    const filteredProjects = myProjList.filter((item) => item.styled === false);
    setMyProjList(filteredProjects);
  };

  const addProjectHandler = (newProject) => {
    setMyProjList((prevPojects) => {
      return [newProject, ...prevPojects];
    });
    
  };

  return (
    <React.Fragment>
      <Header />
      <NewProject onAddProject={addProjectHandler} />
      <ProjectList
        items={myProjList}
        onItemEdit={itemEditHandler}
        readMode={readModeState}
        onReadModeChange={readModeChangeHandler}
        onItemStyled={itemStyledHandler}
        onItemsDelete={deleteHandler}
      />
    </React.Fragment>
  );
};

export default App;
