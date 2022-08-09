import { Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  return <Box>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</Box>;
};

export default Header;
