import React, { FC } from 'react';

import useStore from '@reducers';

import CommonButton from '@atoms/CommonButton';
import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';

import CommonBar from '@components/Common/CommonBar';
import { HomeButtonSection, HS } from '@components/Home';

const Home: FC = () => {
  const me = useStore((state) => state.me);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  return (
    <>
      <HomeButtonSection />
      <HS.Text>Home Style!</HS.Text>
      <CommonBar />
      <CustomColorBar color="#ff9595" />
      <CommonButton type="primary" onClick={me === null ? login : logout}>
        {me === null ? 'Log In' : 'Log Out'}
      </CommonButton>
    </>
  );
};

export default Home;
