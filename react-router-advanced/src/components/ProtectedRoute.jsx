// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = false; // This would typically come from your authentication logic

  if (!isAuthenticated) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  return <Outlet />; // If authenticated, render the protected routes
};

export default ProtectedRoute;
