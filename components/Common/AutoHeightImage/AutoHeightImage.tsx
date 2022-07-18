import React, { FC, memo } from 'react';
import Image, { ImageProps } from 'next/image';
import equal from 'fast-deep-equal';

import A from './AutoHeightImage.styles';

const AutoHeightImage: FC<ImageProps> = ({ ...props }) => (
  <A.AutoHeightImageWrapper>
    <Image
      layout="fill"
      className="auto-height"
      {...{ ...props, alt: props.alt ?? 'auto-height-image' }}
    />
  </A.AutoHeightImageWrapper>
);

export default memo(AutoHeightImage, equal);
