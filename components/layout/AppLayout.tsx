import React from 'react';

import { Container } from '@chakra-ui/react';

interface IProps {
  children: React.ReactElement;
}

const AppLayout: React.FC<IProps> = ({ children }) => (
  <Container
    display="flex"
    minW={['414px', '768px', '768px', '1200px']}
    minH="100vh"
    m="auto auto 0"
    px={['21px', '22px']}
  >
    <main>{children}</main>
  </Container>
);

export default AppLayout;
