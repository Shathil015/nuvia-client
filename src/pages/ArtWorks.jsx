import React from "react";

const allArtPromise = fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
const { name } = allArtPromise;
const ArtWorks = () => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default ArtWorks;
