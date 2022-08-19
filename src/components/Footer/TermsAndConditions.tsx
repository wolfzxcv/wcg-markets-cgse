import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItem, FooterItemTitle } from './FooterItem';

const TermsAndConditions: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex flexDir="column" width={{ base: '50%', md: '25%' }}>
      <FooterItemTitle text={t('termsAndConditions')} />

      <FooterItem text={t('riskDisclosure')} href="/riskDisclosure" />

      <FooterItem text={t('disclaimer')} href="/disclaimer" />

      <FooterItem text={t('privacyPolicy')} href="/privacyPolicy" />
    </Flex>
  );
};

export default TermsAndConditions;
