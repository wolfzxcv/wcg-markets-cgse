import { scrollToTop } from '@/utils';
import { Box, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const BackToTop: React.FC<{}> = () => {
  return (
    <Box position="fixed" zIndex={1000} bottom="80px" right="10px">
      <IconButton
        onClick={scrollToTop}
        icon={<BiArrowToTop fontSize="40px" />}
        aria-label="BackToTop"
        _hover={{
          opacity: 0.8,
          transition: '1s'
        }}
        color="#041C27"
      />
    </Box>
  );
};

export default BackToTop;
