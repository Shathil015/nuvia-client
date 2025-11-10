import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section className="banner"></section>
        <section>
          <Outlet></Outlet>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default HomeLayout;
