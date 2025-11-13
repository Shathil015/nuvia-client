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
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="p-8 w-8/12 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">🎨 All Artworks</h2>

        <div className=" h-100  grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((art) => (
            <div
              key={art._id}
              className="bg-white border rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={art.photoURL}
                alt={art.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{art.title}</h3>
                <p className="text-primary">by {art.user_name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Medium: {art.medium}
                </p>
                <p className="text-sm mt-1">❤️ {art.likes} likes</p>

                <Link
                  to={`/auth/artDetails/${art._id}`}
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
