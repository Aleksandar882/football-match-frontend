/* eslint-disable react/prop-types */
const MatchList = ({ matches }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      {matches.length === 0 ? (
        <p className="text-center text-gray-500">No matches found.</p>
      ) : (
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.id} className="p-4 border rounded-lg shadow-sm">
              <p className="text-gray-500 text-sm">
                {new Date(match.matchDate).toLocaleDateString("de")}
              </p>
              <h3 className="text-lg font-semibold">
                {match.homeTeam.name}{" "}
                <span className="font-bold">{match.homeTeamScore}</span> -{" "}
                <span className="font-bold">{match.awayTeamScore}</span>{" "}
                {match.awayTeam.name}
              </h3>
              {match.competition && (
                <p className="text-sm text-gray-600">
                  Competition: {match.competition.name}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchList;
