import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesList } from "./routesList";
import Project from "../pages/project/Project";

const RoutesComponent = () => {
  return (
    <Routes>
      {routesList.map((route) => (
        <Route
          path={route.path}
          key={`route${route.path}`}
          element={<route.component />}
        />
      ))}
      <Route path="/portfolio/:projectId" element={<Project />} />
    </Routes>
  );
};

export default RoutesComponent;
