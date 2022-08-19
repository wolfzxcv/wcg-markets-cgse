import { HOVER_PARAMS } from '@/assets/styleConfig';
import { Flex, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItemTitle } from './FooterItem';

const AboutUs: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex flexDir="column" width={{ base: '50%', md: '25%' }}>
      <Link _hover={HOVER_PARAMS} href={'/about'}>
        <FooterItemTitle text={t('aboutUs')} />
      </Link>

      <FooterItemTitle text={t('advantage')} />

      <Link _hover={HOVER_PARAMS} href={'/license'}>
        <FooterItemTitle text={t('license')} />
      </Link>
    </Flex>
  );
};

export default AboutUs;
