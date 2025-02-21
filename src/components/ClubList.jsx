/* eslint-disable react/prop-types */
const ClubList = ({ clubs, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No clubs available.
        </p>
      ) : (
        clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 relative"
          >
            <h2 className="text-xl font-semibold text-blue-600">{club.name}</h2>
            <p className="text-gray-600 mt-2">Founded: {club.yearFounded}</p>

            <button
              onClick={() => onDelete(club)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ClubList;
