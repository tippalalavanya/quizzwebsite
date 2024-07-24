// src/App.js or src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizPage from './features/quiz/QuizPage';
import LoginSignup from './components/LoginSignup';
import Home from './features/home/Home'; // Adjust import based on your project structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/quiz" element={isAuthenticated() ? <QuizPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}
const isAuthenticated = () => {
    // Add your authentication logic here
    return !!localStorage.getItem('authToken'); // Example using localStorage
  };

export default App;
