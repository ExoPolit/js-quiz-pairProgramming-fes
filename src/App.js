import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import QuizModule from "./pages/QuizModule.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:cat" element={<QuizModule />} />
      </Routes>
    </Router >
  );
}

export default App;