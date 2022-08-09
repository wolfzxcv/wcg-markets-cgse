import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

const ConditionLinks: React.FC<{}> = () => {
  const { t } = useTranslation('footer');
  return (
    <Flex wrap="wrap">
      <ConditionLink
        text={t('privacyPolicy')}
        href="/conditions/privacyPolicy"
      />
      <Box mx={1} my={2}>
        |
      </Box>
      <ConditionLink
        text={t('termsAndConditions')}
        href="/conditions/termsAndConditions"
      />
      <Box mx={1} my={2}>
        |
      </Box>
      <ConditionLink
        text={t('disputeSettlement')}
        href="/conditions/disputeSettlement"
      />
      <Box mx={1} my={2}>
        |
      </Box>
      <ConditionLink
        text={t('riskDisclaimer')}
        href="/conditions/riskDisclaimer"
      />
      <Box mx={1} my={2}>
        |
      </Box>
      <ConditionLink text={t('amlPolicy')} href="/conditions/amlPolicy" />
    </Flex>
  );
};

type ConditionLinkProps = {
  text: string;
  href: string;
};

const ConditionLink: React.FC<ConditionLinkProps> = ({
  text,
  href
}: ConditionLinkProps) => {
  return (
    <Box
      textDecoration="underline"
      mx={1}
      my={2}
      _hover={{
        textDecoration: 'none',
        color: 'white',
        transition: '1s'
      }}
    >
      <Link href={href}>{text}</Link>
    </Box>
  );
};

export default ConditionLinks;
