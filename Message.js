import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/message');
        console.log(response);
        setMessage(response.data.message);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Message;
