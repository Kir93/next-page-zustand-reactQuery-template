import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';

type IProps = ChakraLinkProps & LinkProps;

export default function NextLink({ href, children, ...rest }: IProps) {
  return (
    <ChakraLink asChild {...rest}>
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
}
