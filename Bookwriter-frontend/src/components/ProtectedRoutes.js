import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, element, redirectPath, path }) => {
  if (isAuthenticated && (path === "/signin" || path === "/signup")) {
    return <Navigate to={"/"} />;
  } else if (
    (!isAuthenticated && path === "/signin") ||
    (!isAuthenticated && path === "/signup")
  ) {
    return element;
  } else if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to={redirectPath} />;
  }
};
export default ProtectedRoute;
