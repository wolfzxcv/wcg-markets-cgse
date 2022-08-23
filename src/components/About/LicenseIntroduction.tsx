import { DARK_GRAY } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const LicenseIntroduction: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex justify="center" my="150px">
      <Flex
        flexDir="column"
        align="center"
        mb={{ base: 10, md: 20 }}
        width={{ base: '80vw', md: '90vw' }}
        maxW="1100px"
      >
        {/* title */}
        <InViewSlideFade>
          <Flex>
            <Text
              fontSize={{
                base: '28px',
                md: '40px'
              }}
              color={DARK_GRAY}
              mr={isChinese ? 0 : 2}
            >
              {t('license')}
            </Text>
            <Text
              fontSize={{
                base: '28px',
                md: '40px'
              }}
            >
              {t('introduction')}
            </Text>
          </Flex>
        </InViewSlideFade>

        <InViewSlideFade>
          <Flex
            mt={10}
            flexDir={{ base: 'column', md: 'row' }}
            justify="space-around"
            align="center"
          >
            <Flex>
              <Image
                my={{ base: 10, md: 0 }}
                src="../assets/images/license_introduction.jpg"
                alt="license_introduction"
              />
            </Flex>

            <Box
              width={{ base: '100%', md: '60%' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              {t('WCGIsAuthorized')}
            </Box>
          </Flex>
        </InViewSlideFade>
      </Flex>
    </Flex>
  );
};

export default LicenseIntroduction;
