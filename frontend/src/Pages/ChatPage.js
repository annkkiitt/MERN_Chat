import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ChatPage = () => {
  const [chat, setChat] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get('/api/chat');
    setChat(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chat.map((chats) => (
        <div key={chats._id}>{chats.chatName}</div>
      ))}
    </div>
  );
};
