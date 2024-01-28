import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"

import Home from './pages/Home';
import QuizModule from "./pages/QuizModule.jsx"
import ClassicPage from "./pages/ClassicPage.jsx";
import TimedModeModule from "./components/TimedModeModule.jsx";
import { useState } from "react";
import categories from "./data/CategoryData.js";

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/timed" element={<TimedModeModule categories={categories} selectedQuestions={selectedQuestions} setSelectedQuestions={setSelectedQuestions} />} />
<Route path="/classic" element={<ClassicPage categories={categories} selectedQuestions={selectedQuestions} setSelectedQuestions={setSelectedQuestions} />} />
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:cat" element={<QuizModule  />} />
      </Routes>
    </Router >
  );
}

export default App;