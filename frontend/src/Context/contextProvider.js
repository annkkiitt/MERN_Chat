import { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setuser] = useState();
  const [selectedChat, setselectedChat] = useState();
  const [chats, setchats] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setuser(userInfo);

    if (!userInfo) {
      history.push('/');
    }
  }, [history]);

  return (
    <ChatContext.Provider
      value={{ user, setuser, selectedChat, setselectedChat, chats, setchats }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
