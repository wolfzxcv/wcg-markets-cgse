import { Box, Flex, Image, keyframes } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { FaDotCircle, FaUserAlt } from 'react-icons/fa';
import { ImArrowUp } from 'react-icons/im';

const RedBlockDiagram: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Flex>
      {/* column 1 */}
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        fontSize={{ base: '12px', md: 'auto' }}
      >
        <FaUserAlt fontSize="50px" />
        <Box>{t('CLIENT')}</Box>

        <Flex
          justify="center"
          animation={`${movement} 0.5s infinite linear`}
          position="relative"
          fontSize={{ base: '18px', md: '26px' }}
        >
          <ImArrowUp />
        </Flex>

        <Box width="100px" height="80px" textAlign="center" pt={6}>
          {t('SPREAD')}
        </Box>

        <Box
          width={{ base: '80px', md: '120px' }}
          height="30px"
          borderRadius="10px"
          textAlign="center"
          lineHeight={2.5}
          bgColor="#176af3"
          mb={3}
        >
          {t('BuyingRate')}
        </Box>

        <Box
          width={{ base: '80px', md: '120px' }}
          height="30px"
          borderRadius="10px"
          textAlign="center"
          lineHeight={2.5}
          bgColor="#7aed28"
          color="black"
        >
          {t('SellingRate')}
        </Box>
      </Flex>

      {/* column 2 */}
      <Flex flexDir="column" justify="space-evenly" align="center">
        <Box width="100px" height="50px"></Box>

        <Image
          src="../assets/images/home_red_block_logo.png"
          mx={{ base: 0, md: 3 }}
          alt="logo"
        />

        <Box width="100px" height="50px">
          <Box
            height="50px"
            width="53px"
            bgImg="linear-gradient(90deg, #176af3 50%, transparent 50%), linear-gradient(90deg, #176af3 50%, transparent 50%), linear-gradient(0deg, #176af3 50%, transparent 50%), linear-gradient(0deg, #176af3 50%, transparent 50%)"
            bgRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
            bgSize="15px 0px, 15px 3px, 15px 0px, 3px 15px"
            animation={`${clockwise} 1s infinite linear`}
          ></Box>
        </Box>
      </Flex>

      {/* column 3 */}
      <Flex>
        <Flex height="100%" flexDir="column" justify="center">
          <Box
            height="3px"
            width="20px"
            bgImg="linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%)"
            bgRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
            bgSize="15px 3px, 0px 15px, 15px 0px, 0px 15px"
            animation={`${clockwise} 1s infinite linear`}
          ></Box>
        </Flex>

        <Flex height="100%" flexDir="column" justify="center" mr={2}>
          <Flex
            height="100px"
            width="30px"
            justify="flex-end"
            align="flex-end"
            bgImg="linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%)"
            bgRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
            bgSize="15px 3px, 15px 0px, 3px 15px, 0px 15px"
            animation={`${lineOne} 10s infinite linear, ${clockwise} 1s infinite linear`}
          >
            <Box
              height="40px"
              width="20px"
              bgImg="linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%)"
              bgRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
              bgSize="15px 3px, 15px 0px, 3px 15px, 0px 15px"
              animation={`${lineTwo} 10s infinite linear, ${clockwise} 1s infinite linear`}
            ></Box>
          </Flex>
          <Flex
            height="100px"
            width="30px"
            justify="flex-end"
            bgImg="linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%)"
            bgRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
            bgSize="15px 0px, 15px 3px, 3px 15px, 0px 15px"
            animation={`${lineFour} 10s infinite, ${counterclockwise} 1s infinite linear`}
          >
            <Box
              height="40px"
              width="20px"
              bgImg="linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%)"
              bgRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
              bgSize="15px 0px, 15px 3px, 3px 15px, 0px 15px"
              animation={`${lineThree} 10s infinite, ${counterclockwise} 1s infinite linear`}
            ></Box>
          </Flex>
        </Flex>

        <Flex flexDir="column" align="center" justify="space-between">
          <CardEach
            animation={`${cardOneAnimation} 10s infinite`}
            text={t('TopLiquidityProviders')}
          />

          <CardEach
            animation={`${cardTwoAnimation} 10s infinite`}
            text={t('WCGMarketsFinancialTechnologyTeam')}
          />

          <CardEach
            animation={`${cardThreeAnimation} 10s infinite`}
            text={t('ConnectToStateOfTheArtServers')}
          />

          <CardEach
            animation={`${cardFourAnimation} 10s infinite`}
            text={t('TheMostStableMetaTrader')}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

type CardEachProps = {
  animation: string;
  text: string;
};

const CardEach: React.FC<CardEachProps> = ({ animation, text }) => {
  return (
    <Flex
      width={{ base: '100px', md: '250px' }}
      minH="54px"
      animation={animation}
    >
      <Box mr={2} display={{ base: 'none', md: 'block' }}>
        <FaDotCircle />
      </Box>
      <Box
        mt={2}
        fontSize={{
          base: '12px',
          md: '18px'
        }}
      >
        {text}
      </Box>
    </Flex>
  );
};

const movement = keyframes`
  0% {
    top: 15px;
    opacity: 0;
  }

  100% {
    top: 5px;
    opacity: 1;
  }
`;

const clockwise = keyframes`
  0% {
    background-position: left top, right bottom, left bottom, right top;
  }
  100% {
    background-position: left 15px top, right 15px bottom , left bottom 15px , right top 15px;
  }
`;

const counterclockwise = keyframes`
  0% {
    background-position: left 15px top, right 15px bottom , left bottom 15px , right top 15px;
  }

  100% {
    background-position:  left top, right bottom, left bottom, right top;
  }
`;

const lineOne = keyframes`
  0% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  }

  24% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  }

  25% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  100% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  } 
`;

const cardOneAnimation = keyframes`
  0% {
    color: #7aed28;
  }

  24% {
    color: #7aed28;
  }

  25% {
    color: silver;
  }

  100% {
    color: silver;
  }
`;

const lineTwo = keyframes`
  0% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  24% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  25% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  }

  49% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  }

  50% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  100% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }
`;

const cardTwoAnimation = keyframes`
  0% {
    color: silver;
  }

  24% {
    color: silver;
  }

  25% {
    color: #7aed28;
  }

  49% {
    color: #7aed28;
  }

  50% {
    color: silver;
  }

  100% {
    color: silver;
  }
`;

const lineThree = keyframes`
  0% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  49% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%); 
  }

  50% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  }

  74% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  } 

  75% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  100% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }
`;

const cardThreeAnimation = keyframes`
  0% {
    color: silver;
  }

  49% {
    color: silver;
  }

  50% {
    color: #7aed28;
  }

  74% {
    color: #7aed28;
  }

  75% {
    color: silver;
  }

  100% {
    color: silver;
  }
`;

const lineFour = keyframes`
  0% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  74% {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(90deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%), linear-gradient(0deg, silver 50%, transparent 50%);
  }

  75% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  }

  100% {
    background-image: linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(90deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%), linear-gradient(0deg, #7aed28 50%, transparent 50%);
  } 
`;

const cardFourAnimation = keyframes`
  0% {
    color: silver;
  }

  74% {
    color: silver;
  }

  75% {
    color: #7aed28;
  }

  100% {
    color: #7aed28;
  } 
`;

export default RedBlockDiagram;
