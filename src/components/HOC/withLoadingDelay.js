import React, { useEffect, useState } from "react";
import Logo from "../Layout/Logo";

const withLoadingDelay = (WrappiedComponent) => (props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (state === false) {
    return <Logo />;
  }
  if (state === true) {
    return <WrappiedComponent {...props} />;
  }
};

export default withLoadingDelay;
