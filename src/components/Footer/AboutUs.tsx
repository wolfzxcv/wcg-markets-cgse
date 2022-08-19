import { Locales } from '@/i18n/config';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FooterItemTitle } from './FooterItem';

const AboutUs: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Flex flexDir="column" width={{ base: '50%', md: '25%' }}>
      <NextLink passHref={true} href="/about" locale={currentLang}>
        <FooterItemTitle text={t('aboutUs')} />
      </NextLink>

      <FooterItemTitle text={t('advantage')} />

      <NextLink passHref={true} href="/license" locale={currentLang}>
        <FooterItemTitle text={t('license')} />
      </NextLink>
    </Flex>
  );
};

export default AboutUs;
