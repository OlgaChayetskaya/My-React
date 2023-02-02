import axios from "axios";
import React from "react";
import { json, Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
