import Wrapper from '@/components/Base/Wrapper';
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
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
        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />
        <Stack spacing={3} w={'60vw'} fontSize={'16px'}>
          <Text>
            {t('theInformation')}
            {t('theCompanyShall')}
          </Text>
          <Text>
            {t('thisWebsiteIs')}
            {t('itIsTheResponsibility')}
          </Text>
          <Text>{t('thisWebsiteShall')}</Text>
          <Text>
            {t('byUsingThis')}
            {t('pleaseCheck')}
          </Text>
          <Text>{t('theOperation')}</Text>
          <Text>{t('preciousMetal')}</Text>
          <Text>{t('pleaseRefer')}</Text>
          <Text>{t('theContent')}</Text>
        </Stack>
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
