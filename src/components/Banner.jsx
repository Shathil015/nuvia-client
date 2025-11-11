import React from "react";
import image1 from "../assets/4.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

const Banner = () => {
  return (
    <div className="bg-base-200 flex flex-row max-h-auto mx-auto mt-10 relative">
      <div className=" mx-10 mt-60">
        <h1 className="text-5xl font-bold">
          Discover, Bid, and Collect Art from Around the World
        </h1>
        <p className="py-6">
          Unlock a world of imagination with our curated collection of original
          artworks.
        </p>
        <button className="btn btn-primary">Explore Auctions</button>
      </div>
      <div className="flex my-10 mr-10 gap-10">
        <div className="flex flex-col gap-5">
          <img src={image2} className=" max-w-75 rounded-lg shadow-2xl" />
          <img src={image3} className=" max-w-75 rounded-lg shadow-2xl" />
        </div>
        <div>
          <img src={image1} className="max-w-155 rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
