import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuestionPage from "./pages/QuestionPage";
import Results from "./pages/Results";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/quiz/:category/question/:id" element={<QuestionPage />} />
        <Route path="/results/:category" element={<Results />} />
      </Routes>
    </Router>
  );
}
