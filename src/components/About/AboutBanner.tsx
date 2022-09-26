import { COMMON_BG, COMMON_FONT_COLOR } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const AboutBanner: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex
      minH={{ base: '700px', md: '850px' }}
      bg={COMMON_BG}
      bgImage={{
        base: '/../assets/images/about_banner_M.png',
        md: '/../assets/images/about_banner.png'
      }}
      bgPosition={{ base: 'bottom center', md: 'top center' }}
      bgSize="cover"
      bgRepeat="no-repeat"
      color={COMMON_FONT_COLOR}
      justify="center"
    >
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        width="80%"
        align="center"
        justify="flex-end"
      >
        <InViewSlideFade>
          <Flex
            flexDir="column"
            width={{ base: '80vw', md: isChinese ? '350px' : '500px' }}
            mr={{ base: 0, md: '200px' }}
            my={{ base: 20, md: 0 }}
          >
            <Flex
              flexDir="column"
              fontSize={{
                base: isChinese ? '36px' : '18px',
                md: isChinese ? '48px' : '32px'
              }}
              fontWeight={700}
              align={{ base: 'center', md: 'flex-start' }}
            >
              <Box>{t('integrityEstablishesTheWorld')}</Box>
              <Box>{t('steadyWinTheFuture')}</Box>
            </Flex>

            <Box mt={10} textAlign={{ base: 'center', md: 'left' }}>
              {t('WCGHasASolidFoundation')}
            </Box>
          </Flex>
        </InViewSlideFade>
        <InViewSlideFade>
          <Image
            pt={{ base: 20, md: 0 }}
            width={{ base: 'auto', md: '80%' }}
            position="relative"
            top={{ base: '-50px', md: '130px' }}
            src="/../assets/images/about_banner_phone.png"
            alt="about_banner_phone"
          />
        </InViewSlideFade>
      </Flex>
    </Flex>
  );
};

export default AboutBanner;
