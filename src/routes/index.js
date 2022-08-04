import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../page/login";
import Start from "../page/start";

const Switch = () => {
  const privateRoutes = [
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/admin",
      // element: <Admin />,
    },
  ];

  const publicRoutes = [{ path: "/login", element: <Login /> }];

  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element}></Route>
      ))}
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element}></Route>
      ))}
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};

export default Switch;
