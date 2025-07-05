import React from "react";
import { Link, useParams } from "react-router-dom";

export const HomeView = () => {
  const { lang } = useParams(); // or extract from useLocation()

  return (
    <div>
      <Link to={`/${lang}/login`}>Login</Link>
      <hr />
      <Link to={`/${lang}/register`}>Sign Up</Link>
    </div>
  );
};
