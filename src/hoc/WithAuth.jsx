import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hook/useAuth";

const WithAuth = ({ children }) => {
  const location = useLocation();
  const {user} =useAuth();
  
  if (!user)
    return <Navigate to="/login" state={{ from: location?.pathname }} />;

    
  return <>{children}</>;
};

export default WithAuth;
