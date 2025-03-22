import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";  // Import the chatbot

const LandingPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Disaster Management App</h1>
      <p>Stay informed and safe.</p>
      <div className="mt-4">
        <Link to="/map" className="btn btn-primary m-2">View Map</Link>
        <Link to="/alerts" className="btn btn-danger m-2">Live Alerts</Link>
        <Link to="/resources" className="btn btn-success m-2">Resources</Link>
      </div>
      
      {/* Chatbot Component */}
      <div className="chatbot-container">
        <Chatbot />
      </div>
    </div>
  );
};

export default LandingPage;
