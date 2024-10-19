import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/homepage";
import NumScrollDemo from "./components/homepage/carusel/prime";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prime" element={<NumScrollDemo />} />
      </Routes>
    </div>
  );
};

export default Router;
