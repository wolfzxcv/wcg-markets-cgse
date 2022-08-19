import AboutBanner from '@/components/About/AboutBanner';
import Wrapper from '@/components/Base/Wrapper';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const about: React.FC<{}> = () => {
  // const { t } = useTranslation('about');

  return (
    <Wrapper>
      <AboutBanner />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['about', 'header', 'footer']))
  }
});

export default about;
