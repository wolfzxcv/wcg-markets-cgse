import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItem, FooterItemTitle } from './FooterItem';

const HonoraryAward: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex
      flexDir="column"
      width={{ base: '100%', md: '25%' }}
      my={{ base: 10, md: 0 }}
    >
      <FooterItemTitle text={t('honoraryAward')} />

      <FooterItem text={t('honoraryAward1')} />

      <FooterItem text={t('honoraryAward2')} />

      <FooterItem text={t('honoraryAward3')} />

      <FooterItem text={t('honoraryAward4')} />

      <FooterItem text={t('honoraryAward5')} />
    </Flex>
  );
};

export default HonoraryAward;
