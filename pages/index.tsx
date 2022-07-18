import React, { FC } from 'react';

import useStore from '@reducers';

import CommonButton from '@atoms/CommonButton';
import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';

import CommonBar from '@components/Common/CommonBar';
import DefaultComponents from '@components/DefaultComponents/DefaultComponents';

const Home: FC = () => {
  const me = useStore((state) => state.me);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  return (
    <>
      <DefaultComponents />
      <CommonBar />
      <CustomColorBar color="#ff9595" />
      <CommonButton type="primary" onClick={me === null ? login : logout}>
        {me === null ? 'Log In' : 'Log Out'}
      </CommonButton>
    </>
  );
};

export default Home;
