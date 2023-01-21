import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

export const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const submitHandler = () => {};

  return (
    <VStack spacing={'5px'}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type={'email'}
          placeholder="Enter your email"
          onChange={(e) => setemail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type={'password'}
          placeholder="Enter your password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        LogIn
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setemail('guest@example.com');
          setpassword('123456789');
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};
