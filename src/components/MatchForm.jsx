/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getClubs, getCompetitions, addMatch } from "../services/api";

const AddMatchForm = ({ onMatchAdded }) => {
  const [clubs, setClubs] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [awayTeamScore, setAwayTeamScore] = useState(0);
  const [matchDate, setMatchDate] = useState("");
  const [competition, setCompetition] = useState("");

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const clubData = await getClubs();
        setClubs(clubData);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    const fetchCompetitions = async () => {
      try {
        const competitionData = await getCompetitions();
        setCompetitions(competitionData);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      }
    };

    fetchClubs();
    fetchCompetitions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchData = {
      homeTeam,
      awayTeam,
      homeTeamScore,
      awayTeamScore,
      matchDate,
      competition,
    };

    try {
      const newMatch = await addMatch(matchData);
      setHomeTeam("");
      setAwayTeam("");
      setHomeTeamScore(0);
      setAwayTeamScore(0);
      setMatchDate("");
      setCompetition("");
      onMatchAdded(newMatch);
    } catch (error) {
      console.error("Error adding match:", error);
      alert("Failed to add match.");
    }
  };

  const handleHomeTeamScoreChange = (e) => {
    setHomeTeamScore(parseInt(e.target.value, 10) || 0);
  };

  const handleAwayTeamScoreChange = (e) => {
    setAwayTeamScore(parseInt(e.target.value, 10) || 0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Match</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Home Team
          </label>
          <select
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.target.value)}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Home Team</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.name}>
                {club.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Away Team
          </label>
          <select
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.target.value)}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Away Team</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.name}>
                {club.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Home Team Score
          </label>
          <input
            type="number"
            value={homeTeamScore}
            onChange={handleHomeTeamScoreChange}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Away Team Score
          </label>
          <input
            type="number"
            value={awayTeamScore}
            onChange={handleAwayTeamScoreChange}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Match Date
          </label>
          <input
            type="date"
            value={matchDate}
            onChange={(e) => setMatchDate(e.target.value)}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Competition
          </label>
          <select
            value={competition}
            onChange={(e) => setCompetition(e.target.value)}
            className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Competition</option>
            {competitions.map((comp) => (
              <option key={comp.id} value={comp.name}>
                {comp.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Add Match
        </button>
      </form>
    </div>
  );
};

export default AddMatchForm;
