import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesList } from "./routesList";

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
    </Routes>
  );
};

export default RoutesComponent;
