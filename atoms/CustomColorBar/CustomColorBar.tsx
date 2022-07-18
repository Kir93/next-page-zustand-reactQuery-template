import React, { FC, memo } from 'react';
import equal from 'fast-deep-equal';

import C from './CustomColorBar.styles';

interface IProps {
  color: string;
}

const CustomColorBar: FC<IProps> = ({ color }) => <C.ColorBarWrapper color={color} />;

export default memo(CustomColorBar, equal);
