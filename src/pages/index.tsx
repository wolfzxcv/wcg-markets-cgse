import Wrapper from '@/components/Base/Wrapper';
import HomeBanner from '@/components/Home/HomeBanner';
import OurAdvantage from '@/components/Home/OurAdvantage';
import SoftwareDownload from '@/components/Home/SoftwareDownload';
import TradingRules from '@/components/Home/TradingRules';
import IntroductionVideo from '@/components/PopUp/IntroductionVideo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: React.FC<{}> = () => {
  return (
    <Wrapper>
      <IntroductionVideo />

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
