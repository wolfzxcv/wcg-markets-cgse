import Wrapper from '@/components/Base/Wrapper';
import HomeBanner from '@/components/Home/HomeBanner';
import OurAdvantage from '@/components/Home/OurAdvantage';
import SoftwareDownload from '@/components/Home/SoftwareDownload';
import TradingRules from '@/components/Home/TradingRules';
import Fake from '@/components/PopUp/Fake';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Fake />
      {/* Home Banner */}
      <HomeBanner />

      {/* Our Advantage */}
      <OurAdvantage />

      {/* Trading Rules */}
      <TradingRules />

      {/* Software Download */}
      <SoftwareDownload />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'header', 'footer']))
  }
});

export default Index;
