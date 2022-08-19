import Wrapper from '@/components/Base/Wrapper';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const demo: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  return (
    <Wrapper>
      <Flex
        bgColor="gray.100"
        w={'100%'}
        py={{ base: 20, xl: 0 }}
        direction={{ base: 'column', xl: 'row' }}
        justify="center"
        align="center"
      >
        <Flex width={{ base: '80vw', xl: '20%' }} justify={'center'}>
          <Image
            src="../assets/images/license_trader_certif.png"
            alt="device"
          />
        </Flex>
        <Box
          my={{ base: 10, xl: 0 }}
          width={{ base: '50vw', xl: '50%' }}
          textAlign={{ base: 'right', xl: 'left' }}
        >
          <Text my={30} fontSize="3xl">
            {t('exchangeSocietyMemberCertification')}
          </Text>
          <Text my={30} fontSize="1xl">
            {t('WCGIndustryCo')}
            {t('wasFoundedIn')}
          </Text>
        </Box>
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

export default demo;
