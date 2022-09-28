import {
  COMMON_FONT_COLOR,
  FONT_WEIGHT,
  SMART_CHOICE_BG
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const AwardWinningPlatform: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  const defaultPic = '01';

  const [pic, setPic] = useState(defaultPic);

  const [show, setShow] = useState(false);

  const element = useRef();

  const heightOfEachElement = 750;

  const determinePic = () => {
    // the position of y-axis of element
    // @ts-ignore
    const elementY = element.current?.offsetTop;
    const currentY = window.scrollY;
    const breakPointStart = elementY;
    const breakPoint1 = elementY + heightOfEachElement * 0.8;
    const breakPoint2 = elementY + heightOfEachElement * 1.6;
    const breakPoint3 = elementY + heightOfEachElement * 2.4;
    const breakPoint4 = elementY + heightOfEachElement * 3.2;

    if (currentY > breakPointStart && currentY < breakPoint1) {
      setPic(defaultPic);
      setShow(true);
    } else if (currentY > breakPoint1 && currentY < breakPoint2) {
      setPic('02');
      setShow(true);
    } else if (currentY > breakPoint2 && currentY < breakPoint3) {
      setPic('03');
      setShow(true);
    } else if (currentY > breakPoint3 && currentY < breakPoint4) {
      setPic('04');
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', determinePic);

    return () => {
      window.removeEventListener('scroll', determinePic);
    };
  }, []);

  return (
    <>
      <Box ref={element}>
        <AwardWinningPlatformEach
          title={t('awardTitle1')}
          text={t('awardText1')}
        />

        <AwardWinningPlatformEach
          title={t('awardTitle2')}
          text={t('awardText2')}
        />

        <AwardWinningPlatformEach
          title={t('awardTitle3')}
          text={t('awardText3')}
        />

        <AwardWinningPlatformEach
          title={t('awardTitle4')}
          text={t('awardText4')}
        />

        <Image
          width={{ base: '80vw', md: '50%' }}
          maxWidth="750px"
          display={show ? 'block' : 'none'}
          position="fixed"
          top={{ base: 'unset', md: '150px' }}
          bottom={{ base: '150px', md: 'unset' }}
          right={{ base: '50px', md: '10%' }}
          src={`/../assets/images/award_winning_platform_${pic}.png`}
          alt="award_winning_platform"
        />
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        bg={SMART_CHOICE_BG}
        height="600px"
      ></Box>
    </>
  );
};

type AwardWinningPlatformEachProps = {
  title: string;
  text: string;
};

const AwardWinningPlatformEach: React.FC<AwardWinningPlatformEachProps> = ({
  title,
  text
}: AwardWinningPlatformEachProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  return (
    <Flex
      minH={{ base: '600px', md: '800px' }}
      bgImage="/../assets/images/award_winning_platform_bg.png"
      backgroundAttachment="fixed"
      bgPosition={{ base: 'bottom center', md: 'top center' }}
      bgSize="cover"
      color={COMMON_FONT_COLOR}
      justify="center"
    >
      <Flex width="90vw" maxW="1100px">
        <Stack
          width={{ base: '80vw', md: isChinese ? '300px' : '500px' }}
          fontSize="20px"
          fontWeight={FONT_WEIGHT}
          spacing={5}
          align={{ base: 'center', md: 'flex-start' }}
          justify={{ base: 'auto', md: 'center' }}
          height="100%"
          pt="150px"
        >
          <Box>{title}</Box>

          <Box fontSize="14px" textAlign={{ base: 'center', md: 'left' }}>
            {text}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default AwardWinningPlatform;
