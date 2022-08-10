import { Locales } from '@/i18n/config';
import { Box, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const FooterLogo: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/" locale={currentLang}>
      <Box width="150px">
        <Image src="../assets/images/logo.png" alt="logo" />
      </Box>
    </NextLink>
  );
};

export default FooterLogo;
