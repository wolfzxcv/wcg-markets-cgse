import AboutBanner from '@/components/About/AboutBanner';
import AwardWinningPlatform from '@/components/About/AwardWinningPlatform';
import CapitalCreatesTheFuture from '@/components/About/CapitalCreatesTheFuture';
import SmartChoice from '@/components/About/SmartChoice';
import StrictlyRegulated from '@/components/About/StrictlyRegulated';
import Wrapper from '@/components/Base/Wrapper';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const about: React.FC<{}> = () => {
  return (
    <Wrapper>
      <AboutBanner />

      <CapitalCreatesTheFuture />

      <StrictlyRegulated />

      <AwardWinningPlatform />

      <SmartChoice />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['about', 'header', 'footer']))
  }
});

export default about;
