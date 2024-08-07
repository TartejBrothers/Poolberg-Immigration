import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import WorkPermit from "./pages/workpermit";
import Stamp1GOverview from "./pages/stamp1g-overview";
import Stamp1GExtension from "./pages/stamp1g-extension";
import Immigration from "./pages/immigration";
import ServicesEmployee from "./pages/services-employee";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-permit" element={<WorkPermit />} />
          <Route path="/stamp1g-overview" element={<Stamp1GOverview />} />
          <Route path="/stamp1g-extension" element={<Stamp1GExtension />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/services/employee" element={<ServicesEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
