import { Locales } from '@/i18n/config';
import { Box, Flex, Image, keyframes } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { FaDotCircle, FaUserAlt } from 'react-icons/fa';
import { ImArrowDown } from 'react-icons/im';

const RedBlockDiagramOriginal: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <StyledRedBlockDiagram>
      {/* row 1 */}
      <Flex justify="center" align="flex-end">
        <CardEach
          animation={`${cardOneAnimation} 4s infinite alternate`}
          cardNo={1}
        />

        <div className="empty-one">
          <div className="bigger-one left">
            <div className="smaller-one"></div>
          </div>
          <div className="bigger-one right">
            <div className="smaller-one"></div>
          </div>
        </div>

        <CardEach
          animation={`${cardThreeAnimation} 4s infinite alternate`}
          cardNo={3}
        />
      </Flex>
      {/* row 2 */}
      <Flex justify="center" align="flex-end">
        <CardEach
          animation={`${cardTwoAnimation} 4s infinite alternate`}
          cardNo={2}
        />

        <div className="bridge-two">
          <div className="upper-one left"></div>
          <div className="lower-one left"></div>
        </div>

        <Image
          src="../assets/images/home_red_block_logo.png"
          pb={10}
          mx={{ base: 0, md: 3 }}
          alt="logo"
        />

        <div className="bridge-two">
          <div className="upper-one right"></div>
          <div className="lower-one right"></div>
        </div>

        <CardEach
          animation={`${cardFourAnimation} 4s infinite alternate`}
          cardNo={4}
        />
      </Flex>
      {/* row 3 */}
      <Flex justify="center" align="flex-end">
        <div className="bridge-three left"></div>
        <div className="bridge-three right"></div>
      </Flex>
      {/* row 4 */}
      <Flex justify="center" align="flex-end">
        <div className="buy-in">{t('BuyingRate')}</div>
        <Box width="30px" height="20px"></Box>
        <div className="sell-out">{t('SellingRate')}</div>
      </Flex>

      {/* row 5 */}
      <Flex justify="center">
        <div className="left"></div>
        <Box width="100px" height="80px" textAlign="center" pt={6}>
          {t('SPREAD')}
        </Box>
        <div className="right"></div>
      </Flex>

      {/* row 6 */}
      <Flex
        justify="center"
        animation={`${movement} 0.5s infinite linear`}
        position="relative"
      >
        <ImArrowDown fontSize="26px" />
      </Flex>

      {/* row 7 */}
      <Flex align="center" flexDir="column">
        <FaUserAlt fontSize="50px" />
        <Box>{t('CLIENT')}</Box>
      </Flex>
    </StyledRedBlockDiagram>
  );
};

type CardEachProps = {
  animation: string;
  cardNo: number;
};

const CardEach: React.FC<CardEachProps> = ({ animation, cardNo }) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  return (
    <Box
      width={{ base: '100px', xl: '130px' }}
      height={{ base: '120px', xl: '150px' }}
      animation={animation}
      borderRadius="20px"
      boxShadow={'rgba(0, 0, 0, 0.25) 0px 3px 3px'}
      my={3}
      bgColor="white"
    >
      <Box m={3} textAlign="center">
        <FaDotCircle />
      </Box>
      <Box
        height={{ base: 'auto', xl: '80px' }}
        fontWeight={700}
        fontSize={{
          base: isChinese ? '20px' : '14px',
          xl: isChinese ? '22px' : 'inherit'
        }}
        px={{ base: 2, xl: isChinese ? 6 : 5 }}
        pt={isChinese ? 0 : 6}
        textAlign="center"
      >
        {t('PROVIDER')}
      </Box>
      <Box textAlign="center">{cardNo}</Box>
    </Box>
  );
};

const clockwise = keyframes`
  0% {
    background-position: left top, right top, right bottom, left bottom;
  }

  100% {
    background-position: right top, right bottom, left bottom, left top;
  }
`;

const counterclockwise = keyframes`
  0% {
    background-position: right top, right bottom, left bottom, left top;
  }

  100% {
    background-position: left top, right top, right bottom, left bottom;
  }
`;

const movement = keyframes`
  0% {
    top: -20px;
    opacity: 0;
  }

  100% {
    top: -10px;
    opacity: 1;
  }
`;

const cardOneAnimation = keyframes`
  0% {
    color: #176af3;
  }

  49% {
    color: #176af3;
  }

  50% {
    color: #B1BDC4;
  }

  100% {
    color: #B1BDC4;
  }
`;

const leftLineOne = keyframes`
  0% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  49% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  50% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  100% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }
`;

const cardTwoAnimation = keyframes`
  0% {
    color: #B1BDC4;
  }

  49% {
    color: #B1BDC4;
  }

  50% {
    color: #176af3;
  }

  100% {
    color: #176af3;
  }
`;

const leftLineTwo = keyframes`
  0% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  49% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  50% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  100% {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }
`;

const cardThreeAnimation = keyframes`
  0% {
    color: #B1BDC4;
  }

  24% {
    color: #B1BDC4;
  }

  25% {
    color: #7aed28;
  }

  100% {
    color: #7aed28;
  }
`;

const rightLineOne = keyframes`
  0% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  49% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  50% {
    background: linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%),
      linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  100% {
    background: linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%),
      linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }
`;

const cardFourAnimation = keyframes`
  0% {
    color: #7aed28;
  }

  24% {
    color: #7aed28;
  }

  25% {
    color: #B1BDC4;
  }

  100% {
    color: #B1BDC4;
  }
`;

const rightLineTwo = keyframes`
  0% {
    background: linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%),
      linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  49% {
    background: linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%),
      linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }

  50% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: right top, right bottom, left bottom, left top;
  }

  100% {
    background: linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(90deg, #B1BDC4 50%, transparent 50%),
      linear-gradient(0deg, #B1BDC4 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
    background-position: left top, right top, right bottom, left bottom;
  }
`;

const StyledRedBlockDiagram = styled.div`
  /* row 1 */
  .empty-one {
    width: 100px;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (min-width: 1280px) {
      height: 130px;
      top: 50px;
    }

    @media (max-width: 1279px) {
      height: 100px;
      top: 30px;
    }

    .bigger-one {
      width: 25px;
      height: 100%;

      .smaller-one {
        width: 10px;
        height: 80%;
      }

      &.left {
        display: flex;
        align-items: flex-end;
        padding: 3px;
        animation: ${leftLineOne} 8s infinite linear;

        .smaller-one {
          background: linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
            linear-gradient(0deg, #b1bdc4 50%, transparent 50%),
            linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
            linear-gradient(0deg, #b1bdc4 50%, transparent 50%);
          background-repeat: repeat-x, repeat-y;
          background-size: 15px 3px, 3px 15px, 15px 0px, 0px 15px;
          padding: 3px;
          animation: ${clockwise} 4s infinite linear;
        }
      }

      &.right {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        background: linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(0deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(0deg, #b1bdc4 50%, transparent 50%);
        background-repeat: repeat-x, repeat-y;
        background-size: 15px 3px, 0px 15px, 15px 0px, 3px 15px;
        padding: 3px;
        animation: ${counterclockwise} 4s infinite linear;

        .smaller-one {
          padding: 3px;
          animation: ${rightLineOne} 8s infinite linear;
        }
      }
    }
  }

  /* row 2 */
  .bridge-two {
    width: 80px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (min-width: 769px) {
      width: 80px;
    }

    @media (max-width: 768px) {
      width: 40px;
    }

    .upper-one {
      width: 100%;
      height: 60px;
      box-sizing: border-box;

      &.left {
        padding: 3px;
        animation: ${leftLineTwo} 8s infinite linear;
      }

      &.right {
        background: linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(0deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(0deg, #b1bdc4 50%, transparent 50%);
        background-repeat: repeat-x, repeat-y;
        background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
        padding: 3px;
        animation: ${counterclockwise} 4s infinite linear;
      }
    }

    .lower-one {
      width: 100%;
      height: 30px;
      box-sizing: border-box;

      &.left {
        background: linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(0deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(90deg, #b1bdc4 50%, transparent 50%),
          linear-gradient(0deg, #b1bdc4 50%, transparent 50%);
        background-repeat: repeat-x, repeat-y;
        background-size: 15px 3px, 0px 15px, 15px 0px, 0px 15px;
        padding: 3px;
        animation: ${clockwise} 4s infinite linear;
      }

      &.right {
        padding: 3px;
        animation: ${rightLineTwo} 8s infinite linear;
      }
    }
  }

  /* row 3 */
  .bridge-three {
    width: 30px;
    height: 30px;

    &.left {
      background: linear-gradient(90deg, #176af3 50%, transparent 50%),
        linear-gradient(0deg, #176af3 50%, transparent 50%),
        linear-gradient(90deg, #176af3 50%, transparent 50%),
        linear-gradient(0deg, #176af3 50%, transparent 50%);
      background-repeat: repeat-x, repeat-y;
      background-size: 15px 0px, 0px 15px, 15px 0px, 3px 15px;
      padding: 3px;
      animation: ${counterclockwise} 1s infinite linear;
    }

    &.right {
      background: linear-gradient(90deg, #7aed28 50%, transparent 50%),
        linear-gradient(0deg, #7aed28 50%, transparent 50%),
        linear-gradient(90deg, #7aed28 50%, transparent 50%),
        linear-gradient(0deg, #7aed28 50%, transparent 50%);
      background-repeat: repeat-x, repeat-y;
      background-size: 15px 0px, 3px 15px, 15px 0px, 0px 15px;
      padding: 3px;
      animation: ${clockwise} 1s infinite linear;
    }
  }

  /* row 4 */
  .buy-in,
  .sell-out {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    line-height: 2;
  }

  .buy-in {
    background-color: #176af3;
    color: white;
  }

  .sell-out {
    background-color: #7aed28;
  }

  /* row 5 */
  .middle {
    width: 100px;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;

    > div {
      width: 100%;
      background-color: #a2a2a2;
      border-radius: 10px;
      height: 30px;
      line-height: 2;
    }
  }

  .left,
  .right {
    width: 40px;
    height: 40px;
  }

  .left {
    background: linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%),
      linear-gradient(90deg, #176af3 50%, transparent 50%),
      linear-gradient(0deg, #176af3 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 0px, 0px 15px, 15px 3px, 3px 15px;
    padding: 3px;
    animation: ${counterclockwise} 1s infinite linear;
  }

  .right {
    background: linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%),
      linear-gradient(90deg, #7aed28 50%, transparent 50%),
      linear-gradient(0deg, #7aed28 50%, transparent 50%);
    background-repeat: repeat-x, repeat-y;
    background-size: 15px 0px, 3px 15px, 15px 3px, 0px 15px;
    padding: 3px;
    animation: ${clockwise} 1s infinite linear;
  }
`;

export default RedBlockDiagramOriginal;
