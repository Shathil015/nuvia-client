import artist1 from "../assets/artist1.png";
import artist2 from "../assets/artist2.jpg";
import artist3 from "../assets/Artist3.png";
import art1 from "../assets/1.jpg";
import art2 from "../assets/2.jpg";
import art3 from "../assets/3.jpg";

export default function TopArtist() {
  // ArtworkCard with hover overlay
  const ArtworkCard = ({ title, user_name, category, photoURL }) => {
    return (
      <div className=" relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
        <img
          src={photoURL}
          alt={title}
          className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-gray-300 text-sm">
            {user_name} | {category}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-32 bg-gray-50 py-12">
      {/* Top Artists of the Week */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center underline decoration-pink-400 underline-offset-8">
          Top Artists of the Week
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-5">
          {/* Artist 1 */}
          <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="relative w-32 h-32 mx-auto -mt-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={artist1}
                alt="Alice Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-bold text-xl">Alice Johnson</h3>
            <p className="text-gray-600 text-sm mb-2">
              Digital Painter & Illustrator
            </p>
            <p className="text-gray-500 text-xs mb-2">New York, USA</p>
            <p className="text-gray-700 font-medium mb-2">
              Artworks: 25 | Followers: 1.2k
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-blue-500 font-semibold cursor-pointer hover:scale-110 transition-transform">
                Twitter
              </span>
              <span className="text-pink-500 font-semibold cursor-pointer hover:scale-110 transition-transform">
                Instagram
              </span>
            </div>
          </div>

          {/* Artist 2 */}
          <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="relative w-32 h-32 mx-auto -mt-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={artist2}
                alt="Bob Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-bold text-xl">Bob Smith</h3>
            <p className="text-gray-600 text-sm mb-2">
              Photographer & Visual Artist
            </p>
            <p className="text-gray-500 text-xs mb-2">London, UK</p>
            <p className="text-gray-700 font-medium mb-2">
              Artworks: 32 | Followers: 900
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-blue-500 font-semibold cursor-pointer hover:scale-110 transition-transform">
                Twitter
              </span>
              <span className="text-pink-500 font-semibold cursor-pointer hover:scale-110 transition-transform">
                Instagram
              </span>
            </div>
          </div>

          {/* Artist 3 */}
          <div className="relative bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="relative w-32 h-32 mx-auto -mt-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={artist3}
                alt="Clara Lee"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-bold text-xl">Clara Lee</h3>
            <p className="text-gray-600 text-sm mb-2">
              Painter & Mixed Media Artist
            </p>
            <p className="text-gray-500 text-xs mb-2">Seoul, South Korea</p>
            <p className="text-gray-700 font-medium mb-2">
              Artworks: 40 | Followers: 2.3k
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-blue-500 font-semibold cursor-pointer hover:scale-110 transition-transform">
                Twitter
              </span>
              <span className="text-pink-500 font-semibold cursor-pointer hover:scale-110 transition-transform">
                Instagram
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center underline decoration-purple-400 underline-offset-8">
          Community Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ArtworkCard
            title="Sunset Overdrive"
            user_name="Alice Johnson"
            category="Painting"
            photoURL={art1}
          />
          <ArtworkCard
            title="Urban Dreams"
            user_name="Bob Smith"
            category="Digital Art"
            photoURL={art2}
          />
          <ArtworkCard
            title="Nature’s Whisper"
            user_name="Clara Lee"
            category="Photography"
            photoURL={art3}
          />
        </div>
      </section>
    </div>
  );
}
