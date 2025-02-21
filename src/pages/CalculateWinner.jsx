import { useState, useEffect } from "react";
import { getCompetitions, calculateWinner } from "../services/api";
import { Link } from "react-router-dom";

const CalculateWinner = () => {
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState("");
  const [winnerName, setWinnerName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const data = await getCompetitions();
        setCompetitions(data);
      } catch (error) {
        console.error("Failed to fetch competitions:", error);
      }
    };
    fetchCompetitions();
  }, []);

  const handleCalculateWinner = async () => {
    if (!selectedCompetition) return;
    setLoading(true);
    setWinnerName(null);

    try {
      const selectedComp = competitions.find(
        (comp) => comp.name === selectedCompetition
      );
      if (!selectedComp) {
        alert("Competition not found");
        return;
      }

      const result = await calculateWinner(selectedComp.id);
      setWinnerName(result.winner?.name || "No winner determined");
    } catch (error) {
      console.error("Failed to calculate winner:", error);
      alert("Failed to calculate winner");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🏆 Calculate Competition Winner
        </h2>

        <select
          className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          value={selectedCompetition}
          onChange={(e) => setSelectedCompetition(e.target.value)}
        >
          <option value="">Select a competition</option>
          {competitions.map((comp) => (
            <option key={comp.id} value={comp.name}>
              {comp.name}
            </option>
          ))}
        </select>

        <button
          className={`w-full p-2 rounded-lg text-white font-semibold transition ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={handleCalculateWinner}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate Winner"}
        </button>

        {winnerName && (
          <div className="mt-6 p-4 border rounded-lg bg-green-50 shadow-md">
            <h3 className="text-lg font-semibold text-green-700">Winner:</h3>
            <p className="text-xl font-bold text-gray-900 mt-1">
              {winnerName} 🎉
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex space-x-4">
        <Link
          to="/clubs"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Clubs
        </Link>
        <Link
          to="/matches"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Matches
        </Link>
        <Link
          to="/competitions"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Competitions
        </Link>
      </div>
    </div>
  );
};

export default CalculateWinner;
