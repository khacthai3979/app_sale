import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [industry, setIndustry] = useState('');
  const [year, setYear] = useState('');
  const [consumption, setConsumption] = useState('');

  const handleAddTrend = async () => {
    try {
      await axios.post('http://localhost:5000/add_trend', { industry, year, consumption });
      alert('Trend added successfully');
    } catch (error) {
      alert('Failed to add trend');
    }
  };

  return (
    <div>
      <h1>Add New Tech Trend</h1>
      <input type="text" value={industry} onChange={e => setIndustry(e.target.value)} placeholder="Industry" />
      <input type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" />
      <input type="number" value={consumption} onChange={e => setConsumption(e.target.value)} placeholder="Consumption" />
      <button onClick={handleAddTrend}>Add Trend</button>
    </div>
  );
};

export default AdminPage;
