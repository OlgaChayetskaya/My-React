import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsProvider from "./components/context/ProjectsProvider";
import ErrorPage from "./pages/Error";
import HomePage, { loader as projectsLoader } from "./pages/Home";
import RootLayout from "./pages/Root";
import SignInPage from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      { path: "auth", element: <SignInPage /> },
    ],
  },
]);

const App = (props) => {
  return (
    <ProjectsProvider>
      <RouterProvider router={router} />
    </ProjectsProvider>
  );
};

export default App;
