import { Image } from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';

interface IAutoHeightImage extends Omit<ImageProps, 'width'> {
  width?: string | number;
  alt: string;
}

const AutoHeightImage = ({ width = '100%', alt = '', ...props }: IAutoHeightImage) => (
  <Image asChild width={width} h="auto" alt={alt}>
    <NextImage {...props} alt={alt} layout="fill" />
  </Image>
);

export default AutoHeightImage;
