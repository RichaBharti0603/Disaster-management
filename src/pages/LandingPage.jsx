import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Welcome to Disaster Management App</h1>
      <p className="lead">Navigate to different sections</p>
      <div className="d-flex justify-content-center flex-wrap mt-4">
        <Link to="/map" className="btn btn-primary m-2">View Map</Link>
        <Link to="/alerts" className="btn btn-warning m-2">Alerts</Link>
        <Link to="/resources" className="btn btn-success m-2">Resources</Link>
      </div>
    </div>
  );
};

export default LandingPage;
