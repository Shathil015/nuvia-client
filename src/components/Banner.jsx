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
    <div className="mt-5 relative w-full h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 flex flex-col justify-center items-center overflow-hidden">
      {/* Banner Title */}
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 drop-shadow-lg mb-3">
          Where Art Comes Alive
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 drop-shadow-sm">
          Showcase your masterpieces, explore creativity, and connect with
          artists worldwide
        </p>
      </div>

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-0">
          <ImageGallery
            items={images}
            useBrowserFullscreen={true}
            showBullets={true}
            autoPlay={true}
            showNav={false}
            showThumbnails={false}
            showPlayButton={false}
            slideDuration={4000}
            flickThreshold={1}
            showFullscreenButton={true}
            additionalClass="h-full"
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
