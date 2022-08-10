import { COMMON_FONT_COLOR } from '@/assets/styleConfig';
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
        <Box width={{ base: '40%', xl: '30%' }}>
          <Image src="../assets/images/logo_header.png" alt="logo" />
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
          ml={{ base: 5, md: 0 }}
        >
          WE CONNECT GLOBAL
        </Box>
      </Flex>
    </NextLink>
  );
};

export default Logo;
