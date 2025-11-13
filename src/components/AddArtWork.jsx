import React from "react";
import Header from "./Header";

const AddArtWork = () => {
  const handleAddArt = (e) => {
    e.preventDefault();
  };

  return (
    <div className="lg:w-11/12 mx-auto">
      <Header></Header>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            🎨 Add Your Artwork
          </h1>

          <form onSubmit={handleAddArt} className="space-y-4">
            {/* Photo */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                className="w-full input input-bordered border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none p-2"
                placeholder="Enter image URL"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Title
              </label>
              <input
                name="title"
                type="text"
                className="w-full input input-bordered border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none p-2"
                placeholder="Enter artwork title"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Artist Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full input input-bordered border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none p-2"
                placeholder="Your name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <input
                name="category"
                type="text"
                className="w-full input input-bordered border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none p-2"
                placeholder="e.g. Painting, Sculpture, Digital Art"
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg mt-4 transition-transform transform hover:scale-105"
            >
              Add Artwork
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtWork;
