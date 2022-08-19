import Wrapper from '@/components/Base/Wrapper';
import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const contract: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');
  return (
    <Wrapper>
      <Flex>
        <Box>{t('contractDetails')} </Box>
        <Box>{t('forOrdinary')}</Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'conditions',
      'header',
      'footer'
    ]))
  }
});

export default contract;
