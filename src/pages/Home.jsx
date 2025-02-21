import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-blue-800">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700">
          Welcome to the Football App
        </h1>
        <p className="text-lg mt-4 text-blue-600">
          Your go-to place for clubs, matches, and competitions
        </p>
      </div>
      <div className="flex gap-6">
        <Link
          to="/clubs"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Explore Clubs
        </Link>
        <Link
          to="/competitions"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Discover Competitions
        </Link>
        <Link
          to="/matches"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          View Matches
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
