import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import ConditionLinks from './ConditionLinks';
import SocialMediaLinks from './SocialMediaLinks';

type FooterTopProps = {
  borderColor: string;
};

export const FooterTop: React.FC<FooterTopProps> = ({
  borderColor
}: FooterTopProps) => {
  return (
    <Flex justify="center">
      <Flex
        minH="100px"
        width="90vw"
        maxW="1100px"
        alignItems="center"
        justify="space-between"
        borderTop={{ base: 'none', md: '1px' }}
        borderBottom="1px"
        borderColor={borderColor}
      >
        <ConditionLinks />

        <Flex height="100%" align="center" justify="space-between" pr="30px">
          <SocialMediaLinks />

          <Image
            display={{ base: 'none', md: 'block' }}
            width={109}
            height={46}
            ml="100px"
            src="../assets/images/logo.png"
            alt="logo"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
