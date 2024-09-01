import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components";
import { Launch } from "./pages";
import { Questions } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <div id="App">
        <Routes>
          <Route path="/questions" element={<Questions />} />
          <Route path="/" element={<Launch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
