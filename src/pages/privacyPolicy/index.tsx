import Wrapper from '@/components/Base/Wrapper';
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const privacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');
  return (
    <Wrapper>
      {/* Privacy Policy */}
      <Flex my={10} direction="column" align="center">
        <Stack spacing={1}>
          <Heading fontSize={'30px'}>{t('privacyPolicy')}</Heading>
        </Stack>
        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />
        <Stack spacing={3} w={'60vw'}>
          {/* Header */}
          <Text>
            {t('theCompanyPersonal')}
            {t('whenTheCompany')}
            {t('theCompanyWill')}
            {t('toThisEnd')}
          </Text>
          {/* A */}
          <Text> {t('allPersonalData')}</Text>
          <Text> {t('theCompanyIs')}</Text>
          <Text> {t('theCompanyWillStore')}</Text>
          <Text> {t('customersMayFrom')}</Text>
          <Text> {t('theCustomerAgrees')}</Text>
          <Text> {t('thatTheCompany')}</Text>
          <Text>
            {t('theCompanyMaySet')} {t('theCompanyAndIts')}
          </Text>
          {/* H */}
          <Text>
            {t('whenTheCustomer')} {t('theseCompanies')}
            {/* -- */}
            {t('theCompanyWillDo')}
            {t('anyoneWhoBrowses')}
          </Text>
          {/*  */}
          <Text> {t('theCompanyGroup')}</Text>
          <Text> {t('mayBeUse')}</Text>
          {/* &nbsp; &nbsp;*/}
          <Text style={{ textIndent: 20 }}> {t('financialWealth')}</Text>
          <Text style={{ textIndent: 20 }}> {t('rewardsPreferential')}</Text>
          <Text style={{ textIndent: 20 }}> {t('servicesAndProducts')}</Text>
          <Text> {t('theAboveMentioned')}</Text>
          <Text>
            {t('inAdditionTo')}
            {t('theDataReferred')}
            {t('ifTheCustomer')}
          </Text>
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

export default privacyPolicy;
