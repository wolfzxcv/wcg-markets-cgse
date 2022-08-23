import { FOOTER_FONT_COLOR, LIVE_CHAT_BORDER } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const TradingRules: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex justify="center">
      <Flex
        width="90vw"
        maxW="1100px"
        flexDir="column"
        my={{ base: 10, md: '150px' }}
      >
        <InViewSlideFade>
          <Flex justify="center">
            {/* title */}
            <Flex flexDir="column" mb={{ base: 10, md: 20 }}>
              {isChinese && (
                <Flex>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={300}
                    color={FOOTER_FONT_COLOR}
                  >
                    {t('trading')}
                  </Text>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={700}
                  >
                    {t('rules')}
                  </Text>
                </Flex>
              )}
              {/* English title */}
              <Box
                fontSize={{
                  base: '30px',
                  md: '48px'
                }}
                color={LIVE_CHAT_BORDER}
              >
                TRADING RULES
              </Box>
            </Flex>
          </Flex>
        </InViewSlideFade>
      </Flex>
    </Flex>
  );
};

export default TradingRules;
