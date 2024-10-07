import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      const response = await axios.get('http://localhost:5000/get_trends?industry=Tech');
      setTrends(response.data);
    };
    fetchTrends();
  }, []);

  return (
    <div>
      <h1>Tech Industry Trends</h1>
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>{trend.year}: {trend.consumption}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
