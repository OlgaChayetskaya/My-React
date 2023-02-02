import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        loader: projectsLoader,
      },
      { path: "auth", element: <SignInPage /> },
    ],
  },
]);

const App = (props) => {
  return <RouterProvider router={router} />;
};

export default App;
