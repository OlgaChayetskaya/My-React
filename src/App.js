//import logo from './logo.svg';
//import "./App.css";
import React from'react';
import Header from "./components/UI/Header";
import Projects from "./components/Projects/Projects";


const App = () => {
  const projects = [
    {
      projName: "WSDR",
      id: 'p1',
      customer: "IBM",
      year: 2008,
      projDesc:"The objective of the WSDR application is to support the workforce management reporting using a trusted view on workforce supply.",
    },
    {
      projName: "Metro",
      id: 'p2',
      customer: "IBM",
      year: 2009,
      projDesc:"Metro is an application that enables the perform operational optimization process within the WMI / HR process architecture.",
    },
    {
      projName: "GTS Hub",
      id: 'p3',
      customer: "IBM",
      year: 2010,
      projDesc:"Main goal of the project: develop reports for management that graphically represent current projects state, show state of key parameters that characterize that project, and calculate/show/predict potential impact of that parameters on project cycle/life.",
    },
    {
      projName: "GBS NA",
      id: 'p4',
      customer: "IBM",
      year: 2011,
      projDesc:"The main goal of the project is to migrate next group of reports from Brio to Cognos: Opportunities, Management, Resources, Scorecard.",
    },
  ];
  
  return (
    <div>
      <Header />
      <Projects items={projects} />
    </div>
  );
};

export default App;