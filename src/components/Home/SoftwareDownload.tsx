import { links } from '@/assets/links';
import {
  COMMON_FONT_COLOR,
  FONT_WEIGHT,
  FOOTER_FONT_COLOR,
  HOVER_PARAMS,
  LIGHT_GRAY,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const SoftwareDownload: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex justify="center" bg={FOOTER_FONT_COLOR}>
      <Flex
        width="90vw"
        maxW="1100px"
        flexDir="column"
        mt={{ base: 10, md: '150px' }}
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
                    fontWeight={FONT_WEIGHT}
                    color={LIGHT_GRAY}
                  >
                    {t('software')}
                  </Text>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={FONT_WEIGHT}
                    color={COMMON_FONT_COLOR}
                  >
                    {t('download')}
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
                SOFTWARE DOWNLOAD
              </Box>
            </Flex>
          </Flex>
        </InViewSlideFade>

        <Flex wrap="wrap-reverse" justify="center">
          <InViewSlideFade>
            <Flex>
              <Image
                ml={{ base: 0, md: 20 }}
                src="../assets/images/software_download.png"
                alt="software_download"
              />
            </Flex>
          </InViewSlideFade>
          <InViewSlideFade>
            <Stack
              width={{ base: '80vw', md: isChinese ? '300px' : '500px' }}
              fontSize="20px"
              fontWeight={FONT_WEIGHT}
              color={COMMON_FONT_COLOR}
              spacing={5}
              my={10}
            >
              <SoftwareDownloadItem
                imageUrl="../assets/images/software_download_ios.png"
                text={t('IOSDownload')}
                href={links.mt4IOS}
              />

              <SoftwareDownloadItem
                imageUrl="../assets/images/software_download_android.png"
                text={t('AndroidDownload')}
                href={links.mt4Android}
              />

              <SoftwareDownloadItem
                imageUrl="../assets/images/software_download_windows.png"
                text={t('WindowsDownload')}
                href={links.mt4App}
              />

              <Box>{t('customizableInterface')}</Box>

              <Flex justify={{ base: 'center', md: 'flex-start' }}>
                <Link _hover={HOVER_PARAMS} href={links.register} isExternal>
                  <Box
                    bg={LIVE_CHAT_BORDER}
                    borderRadius="5px"
                    px={8}
                    py={3}
                    textAlign="center"
                    width="fit-content"
                  >
                    {t('openAccount')}
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

type SoftwareDownloadItemProps = {
  imageUrl: string;
  text: string;
  href: string;
};

const SoftwareDownloadItem: React.FC<SoftwareDownloadItemProps> = ({
  imageUrl,
  text,
  href
}: SoftwareDownloadItemProps) => (
  <Link _hover={HOVER_PARAMS} href={href} isExternal>
    <Flex align="center">
      <Box>
        <Image width="60%" mr={3} src={imageUrl} alt="software_download_icon" />
      </Box>
      <Box>{text}</Box>
    </Flex>
  </Link>
);

export default SoftwareDownload;
