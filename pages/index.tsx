import React, { FC } from 'react';

import { Button, Text } from '@chakra-ui/react';

import useStore from 'store';

import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';

import CommonBar from '@components/Common/CommonBar';
import { HomeButtonSection } from '@components/Home';

const Home: FC = () => {
  const me = useStore((state) => state.me);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  return (
    <>
      <HomeButtonSection />
      <Text size="lg">Home Style!</Text>
      <CommonBar />
      <CustomColorBar color="#ff9595" />
      <Button colorScheme="primary" onClick={me === null ? login : logout}>
        {me === null ? 'Log In' : 'Log Out'}
      </Button>
    </>
  );
};

export default Home;
