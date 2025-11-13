import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLoaderData } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  //   console.log(user);
  const location = useLoaderData();
  // console.log(loading);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
