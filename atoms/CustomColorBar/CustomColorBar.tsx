import React, { FC, memo } from 'react';
import equal from 'fast-deep-equal';

import { Box } from '@chakra-ui/react';

interface IProps {
  color: string;
}

const CustomColorBar: FC<IProps> = ({ color }) => (
  <Box w="100vw" h="2px" m="15px auto" bgColor={color} />
);

export default memo(CustomColorBar, equal);
