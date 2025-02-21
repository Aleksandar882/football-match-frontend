/* eslint-disable react/prop-types */
const CompetitionList = ({ competitions }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      {competitions.length === 0 ? (
        <p className="text-center text-gray-500">No competitions found.</p>
      ) : (
        <div className="space-y-4">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className="p-4 border rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">{competition.name}</h3>
              <p className="text-gray-500 text-sm">
                {new Date(competition.startDate).toLocaleDateString("de")} -{" "}
                {new Date(competition.endDate).toLocaleDateString("de")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompetitionList;
