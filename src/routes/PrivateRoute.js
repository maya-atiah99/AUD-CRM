import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const auth = token;
  return auth ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
