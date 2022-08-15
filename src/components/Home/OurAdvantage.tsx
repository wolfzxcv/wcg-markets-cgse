import { FOOTER_FONT_COLOR, LIVE_CHAT_BORDER } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const OurAdvantage: React.FC<{}> = () => {
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
                  我們的
                </Text>
                <Text
                  fontSize={{
                    base: '36px',
                    md: '48px'
                  }}
                  fontWeight={700}
                >
                  優勢
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
              OUR ADVANTAGE
            </Box>
          </Flex>
        </Flex>
        <Flex wrap="wrap" justify="center">
          {/* Items */}
          <AdvantageItem
            imageSrc="../assets/images/advantage_01.png"
            title="111"
            text="222"
          />

          <AdvantageItem
            imageSrc="../assets/images/advantage_02.png"
            title="111"
            text="222"
          />

          <AdvantageItem
            imageSrc="../assets/images/advantage_03.png"
            title="111"
            text="222"
          />

          <AdvantageItem
            imageSrc="../assets/images/advantage_04.png"
            title="111"
            text="222"
          />

          <AdvantageItem
            imageSrc="../assets/images/advantage_05.png"
            title="111"
            text="222"
          />

          <AdvantageItem
            imageSrc="../assets/images/advantage_06.png"
            title="111"
            text="222"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

type AdvantageItemProps = {
  imageSrc: string;
  title: string;
  text: string;
};

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  imageSrc,
  title,
  text
}: AdvantageItemProps) => {
  return (
    <Flex width={{ base: '90%', md: '45%' }} my={{ base: 3, md: 5 }}>
      <Flex width="20%" mr={10}>
        <Image src={imageSrc} alt="image" />
      </Flex>
      <Flex flexDir="column" justify="center">
        <Box fontSize="24px" fontWeight={600}>
          {title}
        </Box>
        <Box fontSize="14px">{text}</Box>
      </Flex>
    </Flex>
  );
};

export default OurAdvantage;
