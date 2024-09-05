import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(user, "this is user");


  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the child components (protected content)
  return children;

  return null;
}

export default PrivateRoute;
