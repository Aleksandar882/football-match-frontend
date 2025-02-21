import { useState, useEffect } from "react";
import { getCompetitions } from "../services/api";
import { Link } from "react-router-dom";
import CompetitionList from "../components/CompetitionList";
import CompetitionForm from "../components/CompetitionForm";

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCompetitions();
  }, []);

  const fetchCompetitions = async () => {
    try {
      const data = await getCompetitions();
      setCompetitions(data);
    } catch (error) {
      console.error("Failed to fetch matches:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompetitionAdded = async (newCompetition) => {
    setCompetitions((prevCompetitions) => [
      ...prevCompetitions,
      newCompetition,
    ]);
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">Competitions</h1>
      {loading ? (
        <p className="text-center">Loading competitions...</p>
      ) : (
        <CompetitionList competitions={competitions} />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Competition
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
          to="/matches"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Matches
        </Link>
        <Link
          to="/calculate-winner"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Calculate Winner of a League
        </Link>
      </div>
      {showForm && (
        <CompetitionForm onCompetitionAdded={handleCompetitionAdded} />
      )}
    </div>
  );
};

export default Competitions;
