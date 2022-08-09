import { Box, Flex, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import InViewSlideFade from '../Common/InViewSlideFade';

const MediaAwards: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Flex width="100%">
      <Box display={{ base: 'none', lg: 'inline-block' }}>
        <Image src="../assets/images/home_polygon.png" alt="polygon" />
      </Box>

      <Box
        width={{ base: '100%', lg: '70%' }}
        mt={{ base: 0, md: '100px' }}
        mb={'100px'}
      >
        <Flex flexDir={{ base: 'column', md: 'row' }} justify="center">
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_01.png"
            text={t('mediaAwards1')}
          />
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_02.png"
            text={t('mediaAwards2')}
          />
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_03.png"
            text={t('mediaAwards3')}
          />
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }} justify="center">
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_04.png"
            text={t('mediaAwards4')}
          />
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_05.png"
            text={t('mediaAwards5')}
          />
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_06.png"
            text={t('mediaAwards6')}
          />
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }} justify="center">
          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_07.png"
            text={t('mediaAwards7')}
          />

          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_08.png"
            text={t('mediaAwards8')}
          />

          <MediaAwardsEach
            imageSrc="../assets/images/home_media_awards_09.png"
            text={t('mediaAwards9')}
          />
        </Flex>
      </Box>

      <Box display={{ base: 'none', lg: 'inline-block' }}></Box>
    </Flex>
  );
};

type MediaAwardsEachProps = {
  imageSrc: string;
  text: string;
};

const MediaAwardsEach: React.FC<MediaAwardsEachProps> = ({
  imageSrc,
  text
}: MediaAwardsEachProps) => {
  return (
    <Flex flexDir={'column'} width={{ base: '100%', md: '35%' }} my={5}>
      <InViewSlideFade>
        <Flex justify="center" align="center" height="150px">
          <Box>
            <Image src={imageSrc} alt={text} />
          </Box>
        </Flex>
        <Flex justify="center" mb={5}>
          <Box>
            <Image
              src="../assets/images/home_media_awards_divider.png"
              alt="divider"
            />
          </Box>
        </Flex>

        <Flex justify={'center'}>
          <Box width={'80%'}>{text}</Box>
        </Flex>
      </InViewSlideFade>
    </Flex>
  );
};

export default MediaAwards;
