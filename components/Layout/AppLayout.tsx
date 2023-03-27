import React from 'react';
import { LS } from '.';

const AppLayout = ({ children }: { children: React.ReactElement }): React.ReactElement => (
  <LS.Container>{children}</LS.Container>
);

export default AppLayout;
