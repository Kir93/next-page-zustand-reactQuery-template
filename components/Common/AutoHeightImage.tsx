import React, { memo } from 'react';
import equal from 'fast-deep-equal';
import { Image, ImageProps } from '@chakra-ui/next-js';

interface IAutoHeightImage extends Omit<ImageProps, 'width'> {
  width?: string | number;
  alt: string;
}

const AutoHeightImage = ({ width = '100%', alt = '', ...props }: IAutoHeightImage) => (
  <Image {...props} w={width} alt={alt} h="auto" />
);

export default memo(AutoHeightImage, equal);
