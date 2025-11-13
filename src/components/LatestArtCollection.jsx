import { use } from "react";
import LatestCart from "./LatetestCart";

const LatestArtCollection = ({ latestArtPromise }) => {
  const artWorks = use(latestArtPromise);
  //   console.log(artWorks);
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold mt-10 "> Latest Creations</h2>
      <p className="text-xl text-primary my-5">
        Discover the latest creations from talented artists around the world.
        Explore their unique styles and stories through each masterpiece.
      </p>
      <div className="w-8/12 items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center ">
        {artWorks.map((art) => (
          <LatestCart key={art._id} art={art}></LatestCart>
        ))}
      </div>
    </div>
  );
};

export default LatestArtCollection;
