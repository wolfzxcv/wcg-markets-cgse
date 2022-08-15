import {
  COMMON_FONT_COLOR,
  FOOTER_FONT_COLOR,
  LIGHT_GRAY,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const SoftwareDownload: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex justify="center" bg={FOOTER_FONT_COLOR}>
      <Flex
        width="90vw"
        maxW="1100px"
        flexDir="column"
        my={{ base: 10, md: '150px' }}
      >
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
                  color={LIGHT_GRAY}
                >
                  軟件
                </Text>
                <Text
                  fontSize={{
                    base: '36px',
                    md: '48px'
                  }}
                  fontWeight={700}
                  color={COMMON_FONT_COLOR}
                >
                  下載
                </Text>
              </Flex>
            )}
            {/* English title */}
            <Box
              fontSize={{
                base: '36px',
                md: '48px'
              }}
              color={LIVE_CHAT_BORDER}
            >
              SOFTWARE DOWNLOAD
            </Box>
          </Flex>
        </Flex>
        <Flex wrap="wrap" justify="center">
          123465
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SoftwareDownload;
