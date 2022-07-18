import React from 'react';
import L from './Layout.styles';

const AppLayout = ({ children }: { children: React.ReactElement }): React.ReactElement => (
  <L.Container>{children}</L.Container>
);

export default AppLayout;
