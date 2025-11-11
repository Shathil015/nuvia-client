import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
