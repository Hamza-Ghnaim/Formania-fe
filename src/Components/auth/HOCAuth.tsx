"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

// Define a type that accepts any component's props
export function withAuth(Component: React.FC) {
  return function AuthenticatedComponent(props: any) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    console.log(user, loading);
    useEffect(() => {
      if (user === null) {
        navigate("/login");
      }
    }, [loading, user, navigate]);

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          {/* Optional spinner here */}
          <p>Loading...</p>
        </div>
      );
    }

    if (user) {
      return <Component {...props} />;
    }

    // If not loading and user is null, show nothing (redirect will happen)
    return null;
  };
}
