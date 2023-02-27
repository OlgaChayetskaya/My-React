import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { projects: projectsReducer, auth: authReducer },
});

export default store;
