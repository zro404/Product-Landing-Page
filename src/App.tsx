import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Launch } from "./pages";
import { Questions } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/questions" element={<Questions />} />
        <Route path="/" element={<Launch />} />
      </Routes>
    </Router>
  );
}

export default App;
