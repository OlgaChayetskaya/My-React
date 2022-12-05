//import logo from './logo.svg';
//import "./App.css";
import React from "react";
import Header from "./components/Layout/Header";
import Projects from "./components/Projects/Projects";

const App = () => {
  const projects = [
    {
      projName: "WSDR",
      id: "p1",
      customer: "IBM",
      year: 2008,
      projDesc:
        "The objective of the WSDR application is to support the workforce management reporting using a trusted view on workforce supply.",
    },
    {
      projName: "Metro",
      id: "p2",
      customer: "IBM",
      year: 2009,
      projDesc:
        "Metro is an application that enables the perform operational optimization process within the WMI / HR process architecture.",
    },
    {
      projName: "GTS Hub",
      id: "p3",
      customer: "IBM",
      year: 2010,
      projDesc:
        "Main goal of the project: develop reports for management that graphically represent current projects state, show state of key parameters that characterize that project, and calculate/show/predict potential impact of that parameters on project cycle/life.",
    },
    {
      projName: "GBS NA",
      id: "p4",
      customer: "IBM",
      year: 2011,
      projDesc:
        "The main goal of the project is to migrate next group of reports from Brio to Cognos: Opportunities, Management, Resources, Scorecard.",
    },
    {
      projName: "IPPF",
      id: "p5",
      customer: "IBM",
      year: 2012,
      projDesc:
        "The IPPF solution provides a key resource for project managers and partners to help in managing and controlling project financial and non-financial information through Project Financial Control (planning, reconciliation and forecasting), Non-financial project assessments and Integration with back end systems.",
    },
    {
      projName: "CGSP",
      id: "p6",
      customer: "IBM",
      year: 2013,
      projDesc:
        "The latest project in the list is IBM CGSP (Client Grows Strategic Planning) provides an integrated collaborative process designed to focus on delivering revenue and signings growth and improving the overall Client Experience.",
    },
    {
      projName: "Client Care",
      id: "p7",
      customer: "IBM",
      year: 2015,
      projDesc:
        "The SmartCare tool delivers a comprehensive view of a client across all IBM divisions and geographies, providing pro-active access to trusted information and insights.",
    },
  ];

  return (
    <React.Fragment>
      <Header />      
      <Projects items={projects} />
    </React.Fragment>
  );
};

export default App;
