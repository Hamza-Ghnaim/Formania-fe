import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const auth = useAuth();
  console.log("auth is", auth);
  if (auth?.loading) {
    return <p>Loading ... </p>;
  }
  return auth?.user ? <Outlet /> : <Navigate to="/login" />;
};
