import React from 'react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Tech Trend Analysis Platform</h1>
      <p>Explore the latest trends in the tech industry.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
      <Chatbot />
    </div>
  );
};

export default HomePage;
