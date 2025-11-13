import { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../components/Header";

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setArtworks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto py-12">
      <Header />

      <div className="w-10/12 mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gradient bg-clip-text text-transparent from-purple-500 via-pink-500 to-red-500">
          🎨 Explore All Artworks
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div
              key={art._id}
              className="relative group bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with hover scale */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={art.photoURL}
                  alt={art.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay with gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

              {/* Card Content */}
              <div className="p-5 bg-white relative z-10">
                <h3 className="text-xl font-bold mb-1">{art.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {art.user_name}</p>
                <p className="text-sm text-gray-500 mb-1">
                  Medium: {art.medium}
                </p>
                <p className="text-sm text-pink-500 mb-3">
                  ❤️ {art.likes} likes
                </p>

                <Link
                  to={`/auth/artDetails/${art._id}`}
                  className="inline-block w-full text-center btn btn-primary text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artworks;
