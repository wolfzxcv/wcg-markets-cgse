import Wrapper from '@/components/Base/Wrapper';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const disclaimer: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');
  return (
    <Wrapper>
      <Flex my={10} direction="column" align="center">
        <Heading size="lg">{t('disclaimer')} </Heading>

        <Box>{t('theInformation')}</Box>
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

export default disclaimer;
