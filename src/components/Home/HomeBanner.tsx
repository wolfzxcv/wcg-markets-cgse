import { links } from '@/assets/links';
import {
  COMMON_BG,
  HOVER_PARAMS,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const HomeBanner: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex
      minH={{ base: '700px', md: '850px' }}
      bg={COMMON_BG}
      bgImage={{
        base: '../assets/images/home_banner_M.jpg',
        md: '../assets/images/home_banner.jpg'
      }}
      bgPosition="top center"
      bgSize={{ base: 'cover', md: 'cover' }}
      bgRepeat="no-repeat"
      color="white"
      align="center"
      justify="center"
    >
      <Flex
        width="60vw"
        justify="space-around"
        wrap="wrap-reverse"
        py={{ base: '50px', md: 0 }}
      >
        <InViewSlideFade>
          <Flex
            flexDir="column"
            pt="30px"
            align={{ base: 'center', md: 'auto' }}
          >
            <Flex
              flexDir="column"
              fontSize={{
                base: isChinese ? '36px' : '16px',
                md: isChinese ? '48px' : '36px'
              }}
              fontWeight={700}
            >
              <Box>{t('sevenCoreAdvantages')}</Box>
              <Box>{t('safeAndSecureTransactions')}</Box>
            </Flex>
            <Flex
              mt={{ base: 10, md: 20 }}
              fontSize={{ base: '14px', md: '18px' }}
              flexDir={{ base: 'column', md: 'row' }}
            >
              <Box
                borderRadius="5px"
                mr={{ base: 0, md: 3 }}
                mb={{ base: 5, md: 0 }}
                px={8}
                py={3}
                border="1px"
                _hover={HOVER_PARAMS}
                onClick={openChatWindow}
                textAlign="center"
                width={isChinese ? 'fit-content' : '250px'}
              >
                {t('openADemoAccount')}
              </Box>
              <Link _hover={HOVER_PARAMS} href={links.register} isExternal>
                <Box
                  bg={LIVE_CHAT_BORDER}
                  borderRadius="5px"
                  px={8}
                  py={3}
                  textAlign="center"
                  width={isChinese ? 'fit-content' : '250px'}
                >
                  {t('openARealAccount')}
                </Box>
              </Link>
            </Flex>
          </Flex>
        </InViewSlideFade>
        <InViewSlideFade>
          <Flex>
            <Image
              src="../assets/images/home_banner_phone.png"
              alt="home_banner_phone"
            />
          </Flex>
        </InViewSlideFade>
      </Flex>
    </Flex>
  );
};

export default HomeBanner;
