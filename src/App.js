import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { projectsActions } from "./store/projects-slice";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import SignInPage from "./pages/SignIn";
import ProjectCard from "./pages/ProjectCard";
import axios from "axios";

let isInitial = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      { path: "card/:id", element: <ProjectCard /> },

      { path: "auth", element: <SignInPage /> },
    ],
  },
]);

const App = (props) => {
  const state = useSelector((state) => state.projects.items);
  console.log("hello app", state);

  const dispatcher = useDispatch();

  const fetchDataHandler = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
    );
    const slicedData = response.data.slice(0, 15);
    let loadedData = [];

    loadedData = slicedData.map((item) => ({
      id: item.Number,
      projName: item.Name,
      projDesc: item.About,
      year: item.MaxHP,
      customer: item.Generation,
      styled: false,
    }));
    console.log("loadedData", loadedData);
    dispatcher(projectsActions.getProjects(loadedData));
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      console.log("useEffect");
      fetchDataHandler();
      return;
    }
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
