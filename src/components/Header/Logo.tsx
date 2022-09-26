import { COMMON_FONT_COLOR } from '@/assets/styleConfig';
import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const Logo: React.FC<{}> = () => {
  return (
    <Flex align="center" justify={{ base: 'center', md: 'auto' }}>
      <Box width={{ base: '25%', xl: '30%' }}>
        <Image src="/../assets/images/logo_header.png" alt="logo" />
      </Box>
      <Box
        display={{ base: 'none', xl: 'block' }}
        color={COMMON_FONT_COLOR}
        fontSize="xl"
        px={2}
      >
        |
      </Box>
      <Box
        color="#4cb1df"
        fontSize={{ base: '14px', xl: 'xl' }}
        ml={{ base: 2, md: 0 }}
      >
        WE CONNECT GLOBAL
      </Box>
    </Flex>
  );
};

export default Logo;
