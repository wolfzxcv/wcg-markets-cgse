import { COMMON_BG } from '@/assets/styleConfig';
import { Box } from '@chakra-ui/react';
import React from 'react';
import FooterBottom from './FooterBottom';
import { FooterTop } from './FooterTop';

const footerFont = 'white';

const Footer: React.FC<{}> = () => {
  return (
    <Box
      as="footer"
      bg={COMMON_BG}
      color={footerFont}
      pt={{ base: 0, md: '100px' }}
      fontSize={{ base: '10px', md: '12px' }}
    >
      <FooterTop borderColor={footerFont} />

      <FooterBottom />
    </Box>
  );
};

export default Footer;
