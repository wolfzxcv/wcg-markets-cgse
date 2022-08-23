import {
  COMMON_FONT_COLOR,
  LIVE_CHAT_BORDER,
  SMART_CHOICE_BG
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const SmartChoice: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex bg={SMART_CHOICE_BG} justify="center" py={{ base: 10, md: '150px' }}>
      <InViewSlideFade>
        {/* title */}
        <Flex
          flexDir="column"
          align="center"
          mb={{ base: 10, md: 20 }}
          width={{ base: '90vw', md: '40vw' }}
          color={COMMON_FONT_COLOR}
        >
          <Flex wrap="wrap" justify="center" fontWeight={700}>
            <Text
              fontSize={{
                base: isChinese ? '24px' : '22px',
                md: '40px'
              }}
              mr={isChinese ? 0 : 2}
            >
              {t('WCGIsAlwaysYour')}
            </Text>
            <Text
              color={LIVE_CHAT_BORDER}
              fontSize={{
                base: isChinese ? '24px' : '22px',
                md: '40px'
              }}
            >
              {t('smartChoice')}
            </Text>
          </Flex>

          <Box textAlign="center" mt={5}>
            {t('WCGKeepsMakingProgress')}
          </Box>
        </Flex>
      </InViewSlideFade>
    </Flex>
  );
};

export default SmartChoice;
