import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import QuizModule from "./pages/QuizModule.jsx";
import ClassicPage from "./pages/ClassicPage.jsx";
import TimedModeModule from "./components/TimedModeModule.jsx";
import { useState } from "react";
import categories from "./data/CategoryData.js";
import { useRef } from "react";

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [localTimeRemaining, setLocalTimeRemaining] = useState(60);

  return (
    <Router>
      <Routes>
        <Route
          path="/classic"
          element={
            <ClassicPage
              categories={categories}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          }
        />
        <Route
          path="/timed"
          element={
            <TimedModeModule
              timeRemaining={localTimeRemaining}
              setLocalTimeRemaining={setLocalTimeRemaining}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:cat" element={<QuizModule />} />
      </Routes>
    </Router>
  );
}

export default App;
