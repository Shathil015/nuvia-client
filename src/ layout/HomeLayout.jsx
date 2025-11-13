import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import TopArtist from "../components/TopArtist";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
          <Home></Home>
          <TopArtist></TopArtist>
        </section>
      </main>
      <footer className="mt-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
