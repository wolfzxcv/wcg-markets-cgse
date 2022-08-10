import {
  COMMON_BG,
  COMMON_FONT_COLOR,
  FOOTER_FONT_COLOR
} from '@/assets/styleConfig';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Download from './Download';
import { FooterItemBase } from './FooterItem';
import FooterLogo from './FooterLogo';
import HonoraryAward from './HonoraryAward';
import OpenAccountNow from './OpenAccountNow';
import TermsAndConditions from './TermsAndConditions';

const Footer: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex
      as="footer"
      align="center"
      flexDir="column"
      bg={COMMON_BG}
      color={COMMON_FONT_COLOR}
      py="100px"
    >
      {/* Mobile Logo */}
      <Flex width="80vw" display={{ base: 'block', sm: 'none' }} mb={20}>
        <FooterLogo />
      </Flex>

      <Flex width="80vw" maxW="1100px" wrap="wrap">
        <AboutUs />
        <Download />
        <OpenAccountNow />
        <TermsAndConditions />
      </Flex>

      <Flex width="80vw" maxW="1100px" wrap="wrap">
        {/* Desktop Logo */}
        <Flex
          display={{ base: 'none', sm: 'block' }}
          mt={5}
          width="50%"
          align="center"
          justify="flex-start"
        >
          <FooterLogo />
        </Flex>

        <HonoraryAward />

        <ContactUs />
      </Flex>

      <Flex
        width="80vw"
        maxW="1100px"
        wrap="wrap"
        flexDir="column"
        color={FOOTER_FONT_COLOR}
        borderTop="1px"
        borderColor={FOOTER_FONT_COLOR}
        mt={5}
        pt={5}
      >
        <FooterItemBase text={t('copyright')} />
        <FooterItemBase text={t('riskWarning')} />
      </Flex>
    </Flex>
  );
};

export default Footer;
