import React from "react";
import { withAuth } from "../../Components/auth/HOCAuth";

const MyFormania = () => {
  return <div>Welcome to My Formania</div>;
};
export default withAuth(MyFormania);
