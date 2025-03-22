import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthForm from "./components/AuthForm";
import ProtectedRoute from "./components/ProtectedRoute"; // For authenticated routes
import Dashboard from "./components/Dashboard"; // Example private page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthForm />} />

        {/* Protected Route (Requires Authentication) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
