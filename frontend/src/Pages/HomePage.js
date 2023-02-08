import React, { useEffect } from 'react';
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { Login } from '../Components/Authentication/Login';
import { Signup } from '../Components/Authentication/Signup';
import { useHistory } from 'react-router-dom';

export function HomePage() {
  const history = useHistory();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('userInfo'));
  //   console.log(user);
  //   if (user) history.push('/chats');
  // }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        broderWidth="1px"
      >
        <Text fontSize={'4xl'} fontFamily="Work sans">
          Talk-A-Tive
        </Text>
      </Box>

      <Box bg={'white'} w="100%" p={4} borderRadius="lg" borderWidth={'1px'}>
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width={'50%'}>LogIn</Tab>
            <Tab width={'50%'}>SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
