import { DARK_GRAY } from '@/assets/styleConfig';
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
      <Flex justify="center" my="150px">
        {/* title */}
        <Flex
          flexDir="column"
          align="center"
          mb={{ base: 10, md: 20 }}
          width={{ base: '80vw', md: '40vw' }}
        >
          <Flex>
            <Text
              fontSize={{
                base: '25px',
                md: '40px'
              }}
              color={DARK_GRAY}
              mr={isChinese ? 0 : 2}
            >
              {t('capitalCreates')}
            </Text>
            <Text
              fontSize={{
                base: '25px',
                md: '40px'
              }}
            >
              {t('theFuture')}
            </Text>
          </Flex>

          <Box textAlign="center" color={DARK_GRAY} mt={5}>
            {t('WCGHasASolidFoundation')}
          </Box>
        </Flex>
      </Flex>
    </InViewSlideFade>
  );
};

export default CapitalCreatesTheFuture;
