import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";

const ArtDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <Outlet>
        <Header></Header>
      </Outlet>
      <h1>All ketogoty is hare</h1>
    </div>
  );
};

export default ArtDetails;
