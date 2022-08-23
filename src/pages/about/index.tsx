import AboutBanner from '@/components/About/AboutBanner';
import AwardWinningPlatform from '@/components/About/AwardWinningPlatform';
import CapitalCreatesTheFuture from '@/components/About/CapitalCreatesTheFuture';
import LicenseIntroduction from '@/components/About/LicenseIntroduction';
import SmartChoice from '@/components/About/SmartChoice';
import StrictlyRegulated from '@/components/About/StrictlyRegulated';
import YearsOfCredibility from '@/components/About/YearsOfCredibility';
import Wrapper from '@/components/Base/Wrapper';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const about: React.FC<{}> = () => {
  return (
    <Wrapper>
      {/* About Banner */}
      <AboutBanner />

      {/* Capital creates the future */}
      <CapitalCreatesTheFuture />

      {/* Strictly regulated and trustworthy */}
      <StrictlyRegulated />

      {/* Award-winning platform */}
      <AwardWinningPlatform />

      {/* WCG is always your smart choice */}
      <SmartChoice />

      {/* 3 items- Years of credibility */}
      <YearsOfCredibility />

      {/* License Introduction */}
      <LicenseIntroduction />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['about', 'header', 'footer']))
  }
});

export default about;
