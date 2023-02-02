import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  console.log("stat", error.status, "err.msg=", error);
  if (error.status === 500) {
    // // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page!";
  }

  return (
    <>
      <main style={{ color: "white" }}>
        <h1>{title}</h1>
        {message}
      </main>
    </>
  );
};

export default ErrorPage;
