import Wrapper from '@/components/Base/Wrapper';
import HorizontalStrip from '@/components/Home/HorizontalStrip';
import MediaAwards from '@/components/Home/MediaAwards';
import Products from '@/components/Home/Products';
import RedBlock from '@/components/Home/RedBlock';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index: React.FC<{}> = () => {
  return (
    <Wrapper>
      {/* $25up no limit */}
      <HorizontalStrip />

      {/* Products */}
      <Products />

      {/* The world's top liquidity traders provide quotations */}
      <RedBlock />

      {/* Media Awards */}
      <MediaAwards />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'header', 'footer']))
  }
});

export default Index;
