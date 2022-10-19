import {
  COMMON_BG,
  COMMON_FONT_COLOR,
  FONT_WEIGHT
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImEarth } from 'react-icons/im';
import Logo from './Logo';
import MobileLangSelector from './MobileLangSelector';
import MobileNav from './MobileNav';

const MobileHeader: React.FC<{}> = () => {
  const {
    isOpen: isOpenMobileNav,
    onOpen: onOpenMobileNav,
    onClose: onCloseMobileNav
  } = useDisclosure();

  const {
    isOpen: isOpenMobileLangSelector,
    onOpen: onOpenMobileLangSelector,
    onClose: onCloseMobileLangSelector
  } = useDisclosure();

  const { t } = useTranslation('header');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <>
      <Flex flexDir="column">
        <Flex
          px="5"
          bg={COMMON_BG}
          color={COMMON_FONT_COLOR}
          height="60px"
          justify="space-between"
          align="center"
          fontWeight={FONT_WEIGHT}
        >
          <Flex
            onClick={onOpenMobileLangSelector}
            align="center"
            fontSize="26px"
          >
            <ImEarth />
          </Flex>

          <Logo />

          <Flex onClick={onOpenMobileNav} align="center" fontSize="26px">
            <AiOutlineMenu />
          </Flex>
        </Flex>
        <Box
          bg={'rgba(0, 0, 0, 0.6)'}
          p={1}
          width="100%"
          color="white"
          textAlign="center"
          fontSize={isChinese ? '12px' : '10px'}
        >
          {t('reminder')}
        </Box>
      </Flex>
      <MobileLangSelector
        isOpen={isOpenMobileLangSelector}
        onClose={onCloseMobileLangSelector}
      />
      <MobileNav isOpen={isOpenMobileNav} onClose={onCloseMobileNav} />
    </>
  );
};

export default MobileHeader;
