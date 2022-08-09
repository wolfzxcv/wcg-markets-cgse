import { Locales } from '@/i18n/config';
import { Box, Flex, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Logo: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/" locale={currentLang}>
      <Flex align="center">
        <Box width={{ base: '100%', xl: '30%' }}>
          <Image src="../assets/images/logo_header.png" alt="logo" />
        </Box>
        <Box
          display={{ base: 'none', xl: 'block' }}
          color="white"
          fontSize="xl"
          px={2}
        >
          |
        </Box>
        <Box
          display={{ base: 'none', xl: 'block' }}
          color="#4cb1df"
          fontSize="xl"
        >
          WE CONNECT GLOBAL
        </Box>
      </Flex>
    </NextLink>
  );
};

export default Logo;
