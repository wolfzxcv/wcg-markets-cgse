import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItemTitle } from './FooterItem';

const AboutUs: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex flexDir="column" width={{ base: '50%', sm: '25%' }}>
      <FooterItemTitle text={t('aboutUs')} />

      <FooterItemTitle text={t('advantage')} />

      <FooterItemTitle text={t('license')} />
    </Flex>
  );
};

export default AboutUs;
