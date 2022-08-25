import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FooterItemTitle } from './FooterItem';

const AboutUs: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  const { push } = useRouter();

  const handleAnchor = (anchor) => {
    push(anchor);
  };

  return (
    <Flex flexDir="column" width={{ base: '50%', md: '25%' }}>
      <FooterItemTitle text={t('aboutUs')} href={'/about'} />

      <Box onClick={() => handleAnchor('/#our_advantage')}>
        <FooterItemTitle text={t('advantage')} />
      </Box>

      <FooterItemTitle text={t('license')} href={'/license'} />
    </Flex>
  );
};

export default AboutUs;
