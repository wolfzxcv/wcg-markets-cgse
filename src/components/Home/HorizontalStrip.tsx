import { openChatWindow } from '@/utils';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import IBButtonBase from '../Common/IBButtonBase';

const HorizontalStrip: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Flex
      bg="#053d49"
      justify="center"
      py={{ base: 10, md: 0 }}
      fontWeight="700"
    >
      <Flex
        width={{ base: '90vw', md: '80vw' }}
        maxW="1100px"
        minH="80px"
        color="white"
        align="center"
        justify="space-between"
        fontSize="14px"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex wrap="wrap" flexDir={{ base: 'column', md: 'row' }} width="100%">
          <HorizontalStripEachItem
            withoutBorder
            title={`$25${t('up')}`}
            text={t('noLimit')}
          />

          <HorizontalStripEachItem title={'$0'} text={t('fee')} />

          <HorizontalStripEachItem
            title={`24${t('hour')}`}
            text={t('liveChat')}
          />

          <HorizontalStripEachItem title={'100%'} text={t('safe')} />

          <HorizontalStripEachItem
            title={t('instant')}
            text={t('withdrawal')}
          />
        </Flex>
        <IBButtonBase
          onClick={openChatWindow}
          text={t('startNow')}
          width={{ base: '60vw', md: '150px' }}
        />
      </Flex>
    </Flex>
  );
};

type HorizontalStripEachItemProps = {
  title: string;
  text: string;
  withoutBorder?: boolean;
};

const HorizontalStripEachItem: React.FC<HorizontalStripEachItemProps> = ({
  title,
  text,
  withoutBorder = false
}: HorizontalStripEachItemProps) => (
  <Flex
    align="center"
    justify={{ base: 'space-between', md: 'start' }}
    px="2"
    borderLeft={{ base: 'none', xl: withoutBorder ? 'none' : '1px' }}
    borderTop={{ base: withoutBorder ? 'none' : '1px', md: 'none' }}
    borderStyle={{ base: 'dotted', md: 'solid' }}
  >
    <Box fontSize="32px" mr="2">
      {title}
    </Box>
    <Box>{text}</Box>
  </Flex>
);

export default HorizontalStrip;
