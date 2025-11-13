import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
  const images = [
    {
      original: "https://i.postimg.cc/Hxq3Q7M2/Banner-3.jpg",
    },
    {
      original: "https://i.postimg.cc/xd7P2bt4/Banner1.jpg",
    },
    {
      original: "https://i.postimg.cc/hGw0B72J/Banner2.jpg",
    },
  ];
  return (
    <div>
      <h2>Banner is hare </h2>
      <ImageGallery
        items={images}
        useBrowserFullscreen={true}
        showBullets={true}
        autoPlay={true}
        showNav={false}
        showThumbnails={false}
        showPlayButton={false}
        slideDuration={4000}
        // slideInterval={5000}
        flickThreshold={1}
        showFullscreenButton={true}
      />
      ;
    </div>
  );
};

export default Banner;
