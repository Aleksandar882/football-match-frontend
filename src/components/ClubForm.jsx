/* eslint-disable react/prop-types */
import { useState } from "react";
import { addClub } from "../services/api";

const ClubForm = ({ onClubAdded }) => {
  const [name, setName] = useState("");
  const [yearFounded, setYearFounded] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newClub = await addClub({ name, yearFounded });

      setName("");
      setYearFounded("");

      onClubAdded(newClub);
    } catch (error) {
      console.error("Error adding club:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Club</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Club Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="number"
          placeholder="Year Founded"
          value={yearFounded}
          onChange={(e) => setYearFounded(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Add Club
        </button>
      </form>
    </div>
  );
};

export default ClubForm;
