import { COMMON_BG, COMMON_FONT_COLOR } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const AwardWinningPlatform: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex
      minH={{ base: '700px', md: '800px' }}
      bg={COMMON_BG}
      bgImage="../assets/images/award_winning_platform_bg.png"
      bgPosition={{ base: 'bottom center', md: 'top center' }}
      bgSize="cover"
      bgRepeat="no-repeat"
      color={COMMON_FONT_COLOR}
      justify="center"
      pb={{ base: '150px', md: 0 }}
    >
      <Flex width="90vw" justify="flex-end" align="center">
        <Flex wrap="wrap" justify="center">
          <InViewSlideFade>
            <Stack
              width={{ base: '80vw', md: isChinese ? '300px' : '500px' }}
              fontSize="20px"
              fontWeight={600}
              spacing={5}
              align={{ base: 'center', md: 'flex-start' }}
              justify={{ base: 'auto', md: 'center' }}
              height="100%"
              mr={{ base: 0, md: 10 }}
              py={20}
            >
              <Box>{t('awardWinningPlatform')}</Box>

              <Box fontSize="14px" textAlign={{ base: 'center', md: 'left' }}>
                {t('basedOnTheBasicPrinciples')}
              </Box>

              <Flex
                mt={{ base: 10, md: 20 }}
                fontSize={{ base: '14px', md: '18px' }}
                flexDir={{ base: 'column', md: 'row' }}
                color={COMMON_FONT_COLOR}
              ></Flex>
            </Stack>
          </InViewSlideFade>
          <InViewSlideFade>
            <Flex justify="center">
              <Image
                position="relative"
                top={{ base: '100px', md: 0 }}
                width={{ base: '80vw', md: '80%' }}
                src="../assets/images/award_winning_platform_01.png"
                alt="strictly_regulated"
              />
            </Flex>
          </InViewSlideFade>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AwardWinningPlatform;
