import { useState, useEffect } from "react";
import { getMatches } from "../services/api";
import { Link } from "react-router-dom";
import MatchForm from "../components/MatchForm";
import MatchList from "../components/MatchList";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const data = await getMatches();
      setMatches(data);
    } catch (error) {
      console.error("Failed to fetch matches:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMatchAdded = async (newMatch) => {
    setMatches((prevMatches) => [...prevMatches, newMatch]);
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto  p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Matches</h1>
      {loading ? (
        <p className="text-center">Loading matches...</p>
      ) : (
        <MatchList matches={matches} />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Match
        </button>
      </div>
      <div className="flex justify-center mt-4 mb-3 gap-6">
        <Link
          to="/clubs"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Clubs
        </Link>
        <Link
          to="/competitions"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Competitions
        </Link>
      </div>
      {showForm && <MatchForm onMatchAdded={handleMatchAdded} />}
    </div>
  );
};

export default Matches;
