import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import QuizModule from "./pages/QuizModule.jsx"
import ClassicPage from "./components/ClassicPage.jsx";
import { useState } from "react";

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:cat" element={<QuizModule />} />
        <Route path="/classic" element={<ClassicPage selectedQuestions={selectedQuestions} />} />
      </Routes>
    </Router >
  );
}

export default App;