//import logo from './logo.svg';
//import "./App.css";
import React from'react';
import Header from "./components/UI/Header";
import Projects from "./components/Projects/Projects"

const App = () => {
  const projects = [
    {
      projName: "WSDR",
      id: 'p1',
      customer: "IBM",
      year: 2008,
    },
    {
      projName: "Metro",
      id: 'p2',
      customer: "IBM",
      year: 2009,
    },
    {
      projName: "GTS Hub",
      id: 'p3',
      customer: "IBM",
      year: 2010,
    },
    {
      projName: "GBS NA",
      id: 'p4',
      customer: "IBM",
      year: 2011,
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
