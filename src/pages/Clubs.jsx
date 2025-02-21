import { useState, useEffect } from "react";
import { getClubs, deleteClub } from "../services/api";
import { Link } from "react-router-dom";
import ClubList from "../components/ClubList";
import ClubForm from "../components/ClubForm";
import ConfirmModal from "../components/ConfirmModal";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const data = await getClubs();
      setClubs(data);
    } catch (error) {
      console.error("Failed to fetch clubs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClubAdded = async (newClub) => {
    setClubs((prevClubs) => [...prevClubs, newClub]);
    setShowForm(false);
  };

  const handleDeleteClub = async () => {
    if (!selectedClub) return;
    try {
      await deleteClub(selectedClub.id);
      setClubs((prevClubs) =>
        prevClubs.filter((club) => club.id !== selectedClub.id)
      );
      setIsModalOpen(false);
      setSelectedClub(null);
    } catch (error) {
      console.error("Failed to delete club:", error);
      alert("Error deleting club.");
    }
  };

  const openDeleteModal = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-2xl font-bold text-center mb-6">Football Clubs</h1>
      {loading ? (
        <p className="text-center">Loading clubs...</p>
      ) : (
        <ClubList clubs={clubs} onDelete={openDeleteModal} />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Club
        </button>
      </div>
      <div className="flex justify-center mt-4 mb-3 gap-6">
        <Link
          to="/competitions"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Competitions
        </Link>
        <Link
          to="/matches"
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Matches
        </Link>
      </div>

      {showForm && <ClubForm onClubAdded={handleClubAdded} />}

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteClub}
        clubName={selectedClub?.name}
      />
    </div>
  );
};

export default Clubs;
