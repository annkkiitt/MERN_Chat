import React, { useEffect, useState } from 'react';
import { ChatState } from '../Context/contextProvider';
import { Box } from '@chakra-ui/react';
import { SideDrawer } from '../Components/Miscellaneous/SideDrawer';
import { MyChats } from '../Components/MyChats';
import { ChatBox } from '../Components/ChatBox';

export const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setfetchAgain] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="90vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setfetchAgain={setfetchAgain}/>}
      </Box>
    </div>
  );
};
