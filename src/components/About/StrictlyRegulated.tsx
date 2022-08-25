import { links } from '@/assets/links';
import {
  COMMON_FONT_COLOR,
  FONT_WEIGHT,
  FOOTER_FONT_COLOR,
  HOVER_PARAMS,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const StrictlyRegulated: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex justify="center">
      <Flex width="90vw" maxW="1100px" flexDir="column" pb={10}>
        <Flex wrap="wrap-reverse" justify="space-around">
          <InViewSlideFade>
            <Flex>
              <Image
                position="relative"
                top={{ base: '100px', md: 0 }}
                width={{ base: '80vw', md: '80%' }}
                src="../assets/images/strictly_regulated.png"
                alt="strictly_regulated"
              />
            </Flex>
          </InViewSlideFade>
          <InViewSlideFade>
            <Stack
              width={{ base: '80vw', md: isChinese ? '300px' : '500px' }}
              fontSize="20px"
              fontWeight={FONT_WEIGHT}
              spacing={5}
              align={{ base: 'center', md: 'flex-start' }}
              justify={{ base: 'auto', md: 'center' }}
              height="100%"
            >
              <Box color={LIVE_CHAT_BORDER}>
                {t('strictlyRegulatedAndTrustworthy')}
              </Box>

              <Box fontSize="14px" textAlign={{ base: 'center', md: 'left' }}>
                {t('WCGIsAProfessional')}
              </Box>

              <Flex
                mt={{ base: 10, md: 20 }}
                fontSize={{ base: '14px', md: '18px' }}
                flexDir={{ base: 'column', md: 'row' }}
                color={COMMON_FONT_COLOR}
              >
                <Box
                  bg={FOOTER_FONT_COLOR}
                  borderRadius="5px"
                  mr={{ base: 0, md: 3 }}
                  mb={{ base: 5, md: 0 }}
                  px={8}
                  py={3}
                  border="1px"
                  _hover={HOVER_PARAMS}
                  onClick={openChatWindow}
                  textAlign="center"
                  width={{
                    base: '70vw',
                    md: isChinese ? 'fit-content' : '250px'
                  }}
                >
                  {t('tradingProducts')}
                </Box>
                <Link _hover={HOVER_PARAMS} href={links.register} isExternal>
                  <Box
                    bg={LIVE_CHAT_BORDER}
                    borderRadius="5px"
                    px={8}
                    py={3}
                    textAlign="center"
                    width={{
                      base: '70vw',
                      md: isChinese ? 'fit-content' : '250px'
                    }}
                  >
                    {t('tradingPlatform')}
                  </Box>
                </Link>
              </Flex>
            </Stack>
          </InViewSlideFade>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StrictlyRegulated;
