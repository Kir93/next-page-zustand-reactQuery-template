import { FC, useCallback, useEffect, useState } from 'react';

import { blurDataURL } from '@configs/bigContents';
import Image, { ImageProps } from 'next/image';

interface IProps extends ImageProps {
  fallbackSrc: string;
}

const ImageFallback: FC<IProps> = (props) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(false);
  const [oldSrc, setOldSrc] = useState(src);

  const onError = useCallback(() => setImgSrc(true), []);

  useEffect(() => {
    if (oldSrc !== src) {
      setImgSrc(false);
      setOldSrc(src);
    }
  }, [oldSrc, src]);

  return (
    <Image
      {...{ ...rest, alt, blurDataURL, onError }}
      src={imgSrc ? fallbackSrc : src}
      placeholder="blur"
    />
  );
};

export default ImageFallback;
