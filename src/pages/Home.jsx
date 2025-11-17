import React from "react";
import Banner from "../components/Banner";
import LatestArtCollection from "../components/LatestArtCollection";

const latestArtPromise = fetch(
  "https://nuvia-brand-server.onrender.com/latest-artworks"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestArtCollection
        latestArtPromise={latestArtPromise}
      ></LatestArtCollection>
    </div>
  );
};

export default Home;
