import {
  FONT_WEIGHT,
  FOOTER_FONT_COLOR,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const OurAdvantage: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex justify="center" id="our_advantage">
      <Flex
        width="90vw"
        maxW="1100px"
        flexDir="column"
        my={{ base: 10, md: '150px' }}
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
                    color={FOOTER_FONT_COLOR}
                  >
                    {t('our')}
                  </Text>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={FONT_WEIGHT}
                  >
                    {t('advantage')}
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
                OUR ADVANTAGE
              </Box>
            </Flex>
          </Flex>
        </InViewSlideFade>
        <InViewSlideFade>
          <Flex wrap="wrap" justify="center">
            {/* Items */}
            <AdvantageItem
              imageSrc="../assets/images/advantage_01.png"
              title={t('TheChineseGoldAndSilverExchangeSociety')}
              text={t('No012')}
            />

            <AdvantageItem
              imageSrc="../assets/images/advantage_02.png"
              title={t('experiencedRiskControlTeam')}
              text={t('moreThanTenYearsOfExperience')}
            />

            <AdvantageItem
              imageSrc="../assets/images/advantage_03.png"
              title={t('tradeFasterWithSmartTechnology')}
              text={t('superiorTradeExecutions')}
            />

            <AdvantageItem
              imageSrc="../assets/images/advantage_04.png"
              title={t('convenientDepositAndWithdrawals')}
              text={t('topUpYourAccount')}
            />

            <AdvantageItem
              imageSrc="../assets/images/advantage_05.png"
              title={t('professionalCustomerService')}
              text={t('instantOnline')}
            />

            <AdvantageItem
              imageSrc="../assets/images/advantage_06.png"
              title={t('transparencyOfTheTradingEnvironment')}
              text={t('giveYouATrustedPlatform')}
            />
          </Flex>
        </InViewSlideFade>
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
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex width={{ base: '90%', md: '45%' }} my={{ base: 3, md: 5 }}>
      <Flex width="20%" mr={10}>
        <Image src={imageSrc} alt="image" />
      </Flex>
      <Flex width="80%" flexDir="column" justify="center">
        <Box
          fontSize={{
            base: isChinese ? '20px' : '14px',
            md: isChinese ? '24px' : '16px'
          }}
          fontWeight={FONT_WEIGHT}
        >
          {title}
        </Box>
        <Box fontSize={{ base: isChinese ? '14px' : '10px', md: '14px' }}>
          {text}
        </Box>
      </Flex>
    </Flex>
  );
};

export default OurAdvantage;
