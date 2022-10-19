import {
  COMMON_BG,
  COMMON_FONT_COLOR,
  FONT_WEIGHT,
  HOVER_PARAMS,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import DesktopLangSelector from './DesktopLangSelector';
import DesktopNav from './DesktopNav';
import Logo from './Logo';

const DesktopHeader: React.FC<{}> = () => {
  const { t } = useTranslation('header');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex flexDir="column">
      <Flex
        align="center"
        justify="center"
        bg={COMMON_BG}
        fontWeight={FONT_WEIGHT}
        fontSize={isChinese ? '16px' : '12px'}
      >
        <Flex
          height="80px"
          justify="space-between"
          align="center"
          width="100%"
          maxW="1100px"
          minW="830px"
        >
          <Logo />
          <DesktopNav />
          <Flex
            align="center"
            color={COMMON_FONT_COLOR}
            _hover={HOVER_PARAMS}
            onClick={openChatWindow}
            border="1px"
            borderColor={LIVE_CHAT_BORDER}
            px={{ base: 1, lg: 2 }}
            py={1}
          >
            <Image
              display={{ base: 'none', lg: 'block' }}
              mr={1}
              width="22px"
              height="20px"
              src="/../assets/images/live_chat_icon.png"
              alt="live_chat"
            />
            <Box>{t('liveChat')}</Box>
          </Flex>
          <DesktopLangSelector />
        </Flex>
      </Flex>
      <Flex
        bg={'rgba(0, 0, 0, 0.6)'}
        width="100%"
        color="white"
        fontSize={isChinese ? '12px' : '10px'}
        justify="center"
      >
        <Box py={1} maxW="1100px" textAlign="center">
          {t('reminder')}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DesktopHeader;
