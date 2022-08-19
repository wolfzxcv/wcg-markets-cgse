import Wrapper from '@/components/Base/Wrapper';
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const privacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');
  return (
    <Wrapper>
      {/* Privacy Policy */}
      <Flex my={10} direction="column" align="center">
        <Box width={'70vw'}>
          <Center fontSize={'30px'}>{t('privacyPolicy')}</Center>
          <Center>
            <Stack spacing={1}>
              <Text>
                {' '}
                {t('theCompanyPersonal')}
                {t('whenTheCompany')}
                {t('theCompanyWill')}
                {t('toThisEnd')}
              </Text>
            </Stack>
          </Center>
          <Stack spacing={1}>
            <Text> {t('allPersonalData')}</Text>
            <Text> {t('theCompanyIs')}</Text>
            <Text> {t('theCompanyWillStore')}</Text>
            <Text> {t('customersMayFrom')}</Text>
            <Text> {t('theCustomerAgrees')}</Text>
            <Text> {t('thatTheCompany')}</Text>
            <Text> {t('theCompanyMaySet')}</Text>
            <Text> {t('theCompanyAndIts')}</Text>
            <Text> {t('whenTheCustomer')}</Text>
            <Text> {t('theseCompanies')}</Text>
            <Text> {t('theCompanyWillDo')}</Text>
            <Text> {t('anyoneWhoBrowses')}</Text>
            <Text> {t('theCompanyGroup')}</Text>
            <Text> {t('mayBeUse')}</Text>
            <Text> {t('financialWealth')}</Text>
            <Text> {t('rewardsPreferential')}</Text>
            <Text> {t('servicesAndProducts')}</Text>
            <Text> {t('theAboveMentioned')}</Text>
            <Text>
              {' '}
              {t('inAdditionTo')}
              {t('theDataReferred')}
              {t('ifTheCustomer')}
            </Text>
          </Stack>
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

export default privacyPolicy;
