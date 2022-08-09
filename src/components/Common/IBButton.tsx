import { Link } from '@chakra-ui/react';
import React from 'react';
import IBButtonBase from './IBButtonBase';

export type IWidth = {
  base: string | number;
  md: string | number;
};

export type IBButtonProps = {
  href: string;
  text: string;
  width: IWidth;
  bg?: string;
};

const IBButton: React.FC<IBButtonProps> = ({
  href,
  text,
  width,
  bg
}: IBButtonProps) => {
  return (
    <Link
      href={href}
      _hover={{
        textDecoration: 'none'
      }}
      isExternal
    >
      <IBButtonBase text={text} width={width} bg={bg} />
    </Link>
  );
};

export default IBButton;
