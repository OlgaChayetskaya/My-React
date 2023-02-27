import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = (props) => {
  const numberOfProjects = useSelector((state) => state.projects.items.length);
  return (
    <header className="header-block">
      <h2 className="header-h2">My Projects</h2>
      <h3>
        Project #<span className="header-badge">{numberOfProjects}</span>
      </h3>
    </header>
  );
};
export default Header;
