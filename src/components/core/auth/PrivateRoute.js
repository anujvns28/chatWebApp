import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(user, "this is user");

  // If user is authenticated, render the child components (protected content)
  if (user) {
    return children;
  }

  // If user is not authenticated, redirect to login page
  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
}

export default PrivateRoute;
