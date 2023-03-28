import React from 'react';
import { LS } from '.';

interface IProps {
  children: React.ReactElement;
}

const AppLayout: React.FC<IProps> = ({ children }) => <LS.Container>{children}</LS.Container>;

export default AppLayout;
