import {
  COMMON_FONT_COLOR,
  FONT_WEIGHT,
  SMART_CHOICE_BG
} from '@/assets/styleConfig';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import InViewSlideFade from '../Common/InViewSlideFade';

const YearsOfCredibility: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  return (
    <Flex bg={SMART_CHOICE_BG} justify="center" pb="150px">
      <Flex width="90vw" maxW="1100px" flexDir="column">
        <Flex flexDir={{ base: 'column', md: 'row' }} color={COMMON_FONT_COLOR}>
          <YearsOfCredibilityItem
            imageSrc="/../assets/images/years_of_credibility_01.png"
            title={t('yearsOfCredibility')}
            text={t('adheringToTheOriginalIntention')}
          />

          <YearsOfCredibilityItem
            imageSrc="/../assets/images/years_of_credibility_02.png"
            title={t('richResources')}
            text={t('weWillDoOurBest')}
          />

          <YearsOfCredibilityItem
            imageSrc="/../assets/images/years_of_credibility_03.png"
            title={t('qualityService')}
            text={t('ourSalesTeam')}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

type YearsOfCredibilityItemProps = {
  imageSrc: string;
  title: string;
  text: string;
};

const YearsOfCredibilityItem: React.FC<YearsOfCredibilityItemProps> = ({
  imageSrc,
  title,
  text
}: YearsOfCredibilityItemProps) => {
  return (
    <InViewSlideFade style={{ width: '100%' }}>
      <Flex flexDir="column" align="center" py={{ base: 10, md: 0 }}>
        <Image src={imageSrc} alt="image" />
        <Box
          fontSize={{
            base: '20px',
            md: '24px'
          }}
          fontWeight={FONT_WEIGHT}
          mt={10}
          mb={3}
        >
          {title}
        </Box>
        <Box fontSize="14px" width="80%">
          {text}
        </Box>
      </Flex>
    </InViewSlideFade>
  );
};

export default YearsOfCredibility;
