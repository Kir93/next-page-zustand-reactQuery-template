import React, { FC } from 'react';

import useStore from '@reducers';

import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';

import CommonBar from '@components/Common/CommonBar';
import { HomeButtonSection } from '@components/Home';
import { Button, Text } from '@chakra-ui/react';

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
