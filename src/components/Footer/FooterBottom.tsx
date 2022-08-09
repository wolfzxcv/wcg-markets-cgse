import { Box, Flex, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const FooterBottom: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex justify="center" py="10">
      <Stack spacing="3" width="90vw" maxW="1100px">
        <Box>{t('WCGMarketsIsALimitedLiabilityCompany')}</Box>

        <Box>{t('WCGMarketsIsRegulatedByTheFINTRAC')}</Box>

        <Box>{t('WCGGlobalLtd')}</Box>

        <Box>{t('HighRiskInvestmentWarning')}</Box>
        <Box>{t('restrictedAreas')}</Box>
      </Stack>
    </Flex>
  );
};

export default FooterBottom;
