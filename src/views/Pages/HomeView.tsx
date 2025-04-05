import React from "react";
import { Link } from "react-router-dom";

export const HomeView = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <hr />
      <Link to="/register">Sign Up</Link>
    </div>
  );
};
