import { ImageProps, Image as Img } from '@chakra-ui/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface IProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string | StaticImport;
  alt: string;
}

export default function NextImage({ src, alt, ...rest }: IProps) {
  return (
    <Img asChild {...rest}>
      <Image src={src} alt={alt} />
    </Img>
  );
}
