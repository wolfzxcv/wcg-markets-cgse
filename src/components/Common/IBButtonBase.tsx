import { Box, Flex } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { IWidth } from './IBButton';

type IBButtonBaseProps = {
  text: string;
  width: IWidth;
  bg?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const IBButtonBase = forwardRef<HTMLDivElement, IBButtonBaseProps>(
  (
    { text, width, bg = '#0e7283', onClick, ...rest }: IBButtonBaseProps,
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        {...rest}
        bg={bg}
        borderRadius="20px"
        width={width}
        py="3"
        mt={{ base: 5, md: 0 }}
        fontWeight={700}
        justify="space-around"
        _hover={{
          cursor: 'pointer',
          transition: '1s',
          opacity: 0.5
        }}
        onClick={onClick}
      >
        <Box>{text}</Box>
        <Box>{'>'}</Box>
      </Flex>
    );
  }
);

IBButtonBase.displayName = 'IBButtonBase';

export default IBButtonBase;
