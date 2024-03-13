/* eslint-disable*/
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/Routes";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.token);

  return (
    <div>
      {isAuthenticated && <Navbar />}
      <AppRoutes isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
