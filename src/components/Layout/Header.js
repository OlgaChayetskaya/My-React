import React, { useContext } from "react";
import ProjectsContext from "../context/projects-context";
import "./Header.css";

const Header = () => {
  const projCtx = useContext(ProjectsContext);
  return (
    <header className="header-block">
      <h2 className="header-h2">My Projects</h2>

      <h3>
        Project #<span className="header-badge">{projCtx.items.length}</span>
      </h3>
    </header>
  );
};
export default Header;
