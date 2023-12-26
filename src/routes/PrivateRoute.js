import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const PrivateRoute = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    const token = localStorage.getItem("token");

    const checkAuthentication = async () => {
      if (token) {
        console.log("hdfhvdnvfdhvfv")
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };
    checkAuthentication();
  }, []);
  return authenticated ? <Outlet/> : <Navigate to='/' replace />;
};

export default PrivateRoute;
