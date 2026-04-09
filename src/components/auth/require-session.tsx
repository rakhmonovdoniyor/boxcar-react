import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSession } from "./app-session";

const RequireSession = () => {
  const location = useLocation();
  const { isAuthenticated } = useAppSession();

  if (!isAuthenticated) {
    const redirectTarget = `${location.pathname}${location.search}`;

    return (
      <Navigate
        replace
        state={{ from: location }}
        to={`/sign-in?redirect=${encodeURIComponent(redirectTarget)}`}
      />
    );
  }

  return <Outlet />;
};

export default RequireSession;
