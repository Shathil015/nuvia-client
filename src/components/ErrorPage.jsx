import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 text-gray-900 px-6">
      {/* Big 404 Text */}
      <h1 className="text-9xl md:text-[12rem] font-extrabold mb-6 drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Message */}
      <p className="text-xl md:text-2xl font-semibold mb-4 text-center">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Suggestion */}
      <p className="text-base md:text-lg text-gray-700 mb-8 text-center">
        It might have been removed, renamed, or never existed.
      </p>

      {/* Call to Action */}
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Optional Creative Decoration */}
      <div className="absolute bottom-10 flex space-x-2">
        <span className="w-4 h-4 bg-purple-300 rounded-full animate-ping"></span>
        <span className="w-4 h-4 bg-pink-300 rounded-full animate-ping delay-200"></span>
        <span className="w-4 h-4 bg-yellow-300 rounded-full animate-ping delay-400"></span>
      </div>
    </div>
  );
}
