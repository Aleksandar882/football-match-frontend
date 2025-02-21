import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Clubs from "./pages/Clubs";
import Competitions from "./pages/Competitions";
import CalculateWinner from "./pages/CalculateWinner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/calculate-winner" element={<CalculateWinner />} />
      </Routes>
    </Router>
  );
}

export default App;
