import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/chatbot', { message });
    setReply(response.data.reply);
  };

  return (
    <div>
      <h2>Chat with TrendBot</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about trends"
      />
      <button onClick={handleSubmit}>Send</button>
      <p>Bot Reply: {reply}</p>
    </div>
  );
};

export default Chatbot;
