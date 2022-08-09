import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import InViewSlideFade from '../Common/InViewSlideFade';
import RedBlockDiagram from './RedBlockDiagram';

const RedBlock: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Flex
      bg="#b81c22"
      justify="center"
      align="center"
      color="white"
      py={{ base: 10, md: '50px' }}
    >
      <Flex
        width="98vw"
        maxW="1200px"
        flexDir={{ base: 'column-reverse', xl: 'row' }}
        justify="space-between"
        align={{ base: 'center', xl: 'auto' }}
      >
        <Flex
          flexDir="column"
          width={{ base: '90%', xl: '50%' }}
          justify={{ base: 'auto', xl: 'center' }}
          my={{ base: 10, md: 0 }}
        >
          <InViewSlideFade>
            <Box
              fontSize={{ base: '24px', md: '36px' }}
              fontWeight="700"
              pb={{ base: 5, md: 10 }}
              textAlign={'left'}
            >
              {t('TheWorldsTop')}
            </Box>
          </InViewSlideFade>

          <InViewSlideFade>
            <Box pb={5}>{t('YouWilHave')}</Box>
          </InViewSlideFade>

          <Stack spacing={1} pb={{ base: 5, md: 10 }}>
            <InViewSlideFade>
              <Flex align="center">
                <Tick />
                <Box>{t('PartnerWithTop')}</Box>
              </Flex>
            </InViewSlideFade>

            <InViewSlideFade>
              <Flex align="center">
                <Tick />
                <Box>{t('PoweredByWCGMarkets')}</Box>
              </Flex>
            </InViewSlideFade>

            <InViewSlideFade>
              <Flex align="center">
                <Tick />
                <Box>{t('ProvidesStateOfTheArt')}</Box>
              </Flex>
            </InViewSlideFade>

            <InViewSlideFade>
              <Flex align="center">
                <Tick />
                <Box>{t('UseTheMostStable')}</Box>
              </Flex>
            </InViewSlideFade>
          </Stack>

          <InViewSlideFade>
            <Box>{t('WCGMarketsBringYouTheBest')}</Box>
          </InViewSlideFade>
        </Flex>
        <Flex
          width={{ base: '100%', xl: '50%' }}
          mt={{ base: 10, xl: 0 }}
          mb={{ base: 10, md: '100px', xl: 0 }}
          justify="center"
        >
          <InViewSlideFade>
            <RedBlockDiagram />
          </InViewSlideFade>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Tick = () => (
  <Image
    mr={2}
    width="25px"
    height="15px"
    src="../assets/images/home_tick.png"
    alt="tick"
  />
);

export default RedBlock;
