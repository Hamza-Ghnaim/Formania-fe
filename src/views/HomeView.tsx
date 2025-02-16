import React from "react";
import { Link } from "react-router-dom";

export const HomeView = () => {
  return (
    <div>
      <Link to="/auth/login">Login</Link>
      <hr />
      <Link to="/auth/register">Sign Up</Link>
    </div>
  );
};
