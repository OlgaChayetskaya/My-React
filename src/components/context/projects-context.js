import React from "react";

const ProjectsContext = React.createContext({
  items: [],
  onItemEdit: (id, updProjName, updProjDesc) => {},
  onItemStyled: (id, updatedState) => {},
  onAddProject: (newProject) => {},
  onItemsDelete: () => {},
});

export default ProjectsContext;
