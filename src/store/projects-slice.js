import { createSlice } from "@reduxjs/toolkit";

const initialProjectsState = { items: [] };

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialProjectsState,
  reducers: {
    getProjects(state, action) {
      console.log("action.payload", action.payload);
      state.items = action.payload || [];
    },

    itemEdit(state, action) {
      const id = action.payload.id;
      const updProjName = action.payload.updProjName;
      const updProjDesc = action.payload.updProjDesc;

      const existingProject = state.items.find((item) => item.id === id);
      existingProject.projName = updProjName;
      console.log("edit id", id, "edit existingProject", state.projectDetail);
      console.log("AAA", existingProject.projName);
      existingProject.projDesc = updProjDesc;
    },

    fullItemEdit(state, action) {
      const existingProject = state.items.find((item) => item.id === action.payload.id);
      existingProject.projName = action.payload.projName;
      console.log("edit id", action.payload.id, "existingProject", existingProject);
      console.log("AAA", existingProject.projName);
      existingProject.projDesc = action.payload.projDesc;
      existingProject.customer = action.payload.customer;
      existingProject.year = action.payload.year;
    },

    itemStyled(state, action) {
      const id = action.payload.id;
      const styledValue = action.payload.styledValue;

      const existingProject = state.items.find((item) => item.id === id);

      existingProject.styled = styledValue;
      //state.items.styled = !state.items.styled;
    },

    addProject(state, action) {
      const newProject = action.payload;
      //state.items.push(newProject);
      state.items = [newProject, ...state.items];
    },

    itemsDelete(state) {
      state.items = state.items.filter((item) => item.styled === false);
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice.reducer;
