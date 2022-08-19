import { FOOTER_FONT_COLOR, LIGHT_GRAY } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const CapitalCreatesTheFuture: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <InViewSlideFade>
      <Flex justify="center" my={{ base: 20, md: '150px' }}>
        {/* title */}
        <Flex
          flexDir="column"
          align="center"
          mb={{ base: 10, md: 20 }}
          width={{ base: '80vw', md: '40vw' }}
        >
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
                {t('capitalCreates')}
              </Text>
              <Text
                fontSize={{
                  base: '36px',
                  md: '48px'
                }}
                fontWeight={700}
              >
                {t('theFuture')}
              </Text>
            </Flex>
          )}

          <Box textAlign="center" color={LIGHT_GRAY} mt={5}>
            {t('WCGHasASolidFoundation')}
          </Box>
        </Flex>
      </Flex>
    </InViewSlideFade>
  );
};

export default CapitalCreatesTheFuture;
