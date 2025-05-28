import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import CommonBar from '@atoms/common/CommonBar';

import { HomeButtonSection, ZustandButtonSection } from '@components/home';

const Home = () => {
  return (
    <Box w="100%">
      <HomeButtonSection />
      <Text fontSize="2xl">Home Style!</Text>
      <CommonBar />
      <ZustandButtonSection />
    </Box>
  );
};

export default Home;
