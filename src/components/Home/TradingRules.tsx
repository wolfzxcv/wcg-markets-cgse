import {
  FONT_WEIGHT,
  FOOTER_FONT_COLOR,
  LIGHT_GRAY,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import InViewSlideFade from '../Common/InViewSlideFade';

const TradingRules: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  const COLUMN_PADDING = 3;

  return (
    <Flex justify="center">
      <Flex
        width="95vw"
        maxW="1100px"
        flexDir="column"
        mb={{ base: 10, md: '100px' }}
      >
        <Flex flexDir="column">
          <InViewSlideFade>
            {/* title */}
            <Flex flexDir="column" align="center" mb={{ base: 10, md: 20 }}>
              {isChinese && (
                <Flex>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={FONT_WEIGHT}
                    color={FOOTER_FONT_COLOR}
                  >
                    {t('trading')}
                  </Text>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={FONT_WEIGHT}
                  >
                    {t('rules')}
                  </Text>
                </Flex>
              )}
              {/* English title */}
              <Box
                fontSize={{
                  base: '30px',
                  md: '48px'
                }}
                color={LIVE_CHAT_BORDER}
              >
                TRADING RULES
              </Box>
            </Flex>
          </InViewSlideFade>
          <InViewSlideFade>
            {/* Table starts */}
            <Flex flexDir="column">
              <Flex
                justify="space-evenly"
                borderTop="4px"
                borderColor={LIVE_CHAT_BORDER}
              >
                <TableColumn text={t('productCode')} />
                <TableColumn text={`XAUUSD (${t('gold')})`} />
                <TableColumn text={`XAGUSD (${t('silver')})`} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('accountCurrency')} />

                <TableColumn wideP={66} text={t('dollar')} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('tradingPlatform')} />

                <TableColumn wideP={66} text="MetaTrader 4" />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('marginRequirement')} />

                <TableColumn wideP={66} text="USD 800" />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('transactionFee')} />

                <TableColumn wideP={66} text={t('zeroTransactionFee')} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('ContractLotSize')} />

                <TableColumn text={`100 ${t('ounce')}`} />
                <TableColumn text={`2500 ${t('ounce')}`} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('minimum')} />

                <TableColumn text={`0.01 ${t('lot')}`} />
                <TableColumn text={`0.01 ${t('lot')}`} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('maximum')} />

                <TableColumn text={`20 ${t('lot')}`} />
                <TableColumn text={`20 ${t('lot')}`} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('bidAskSpread')} />

                <Flex flexDir="column" width="35%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={`${t('premium')} 0.3 (${t('fixed')})`}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={`${t('superior')} 0.4 (${t('fixed')})`}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={`${t('basic')} 0.5 (${t('fixed')})`}
                    removePadding
                  />
                </Flex>

                <Flex flexDir="column" width="30%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={`${t('premium')} 0.02 (${t('fixed')})`}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={`${t('superior')} 0.03 (${t('fixed')})`}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={`${t('basic')} 0.04 (${t('fixed')})`}
                    removePadding
                  />
                </Flex>
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('lockUpMargin')} />

                <TableColumn
                  text={`${t('ofTheTotalAmountOfEachContract').replace(
                    'number',
                    '0.5'
                  )}`}
                />
                <TableColumn
                  text={`${t('ofTheTotalAmountOfEachContract').replace(
                    'number',
                    '1'
                  )}`}
                />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('liquidationLevel')} />

                <Flex flexDir="column" width="66%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={t('ifTheMarginLevel')}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={t('MetaTrader4WillAutomatically')}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={t('whenThePriceFluctuatesGreatly')}
                    removePadding
                  />
                </Flex>
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('weekendHolidayMarket')} />

                <TableColumn wideP={66} text={t('ifTheMarginIsLess')} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('marketInterest')} />

                <Flex flexDir="column" width="66%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={t('OneDayMarketPassingInterest')}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={t('interestWillBeAdjusted')}
                    removePadding
                  />
                </Flex>
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('instructionCategory')} />

                <TableColumn wideP={66} text={t('marketPrice')} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('orderTimeLimit')} />

                <TableColumn wideP={66} text={t('validUntilTheClose')} />
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('limitStopLossAndTakeProfit')} />

                <Flex
                  flexDir="column"
                  width="66%"
                  justify="center"
                  py={COLUMN_PADDING}
                >
                  <Flex>
                    <TableColumn
                      wideP={100}
                      text={t('itNeedsToBeMoreThan').replace('number', '2')}
                      removePadding
                    />
                    <TableColumn
                      wideP={100}
                      text={t('itNeedsToBeMoreThan').replace('number', '0.2')}
                      removePadding
                    />
                  </Flex>
                  <TableColumn
                    wideP={100}
                    text={t('beforeMajorDataIsReleased')}
                    removePadding
                  />
                </Flex>
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('depositAndWithdrawal')} />

                <TableColumn wideP={66} text={t('USDToHKD')} />
              </Flex>

              {/* TIME  */}
              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('tradingHours')} />

                <Flex flexDir="column" width="66%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={t('tradingHoursSummer')}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={t('tradingHoursWinter')}
                    removePadding
                  />
                </Flex>
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('systemSettlement')} />

                <Flex flexDir="column" width="66%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={t('systemSettlementSummer')}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={t('systemSettlementWinter')}
                    removePadding
                  />
                </Flex>
              </Flex>

              <Flex borderTop="1px" borderColor={LIGHT_GRAY}>
                <TableColumn text={t('systemMaintenance')} />

                <Flex flexDir="column" width="66%" py={COLUMN_PADDING}>
                  <TableColumn
                    wideP={100}
                    text={t('systemMaintenanceSummer')}
                    removePadding
                  />
                  <TableColumn
                    wideP={100}
                    text={t('systemMaintenanceWinter')}
                    removePadding
                  />
                </Flex>
              </Flex>
            </Flex>
            {/* Table ends */}
          </InViewSlideFade>

          <InViewSlideFade>
            <Flex justify="center">
              <Flex
                flexDir="column"
                fontWeight={FONT_WEIGHT}
                py={10}
                width="90%"
              >
                <Box>{t('premiumAccount')}</Box>
                <Box mt={2}>{t('superiorAccount')}</Box>
                <Box mt={5}>{t('sinceThePriceFluctuations')}</Box>
              </Flex>
            </Flex>
          </InViewSlideFade>
        </Flex>
      </Flex>
    </Flex>
  );
};

type TableColumnProps = {
  wideP?: number;
  text: string;
  removePadding?: boolean;
};

const TableColumn: React.FC<TableColumnProps> = ({
  wideP = 33,
  text,
  removePadding = false
}: TableColumnProps) => {
  const percentage = `${wideP}%`;

  return (
    <Box
      width={percentage}
      textAlign="center"
      py={removePadding ? 0 : 5}
      fontWeight={FONT_WEIGHT}
      fontSize={{ base: '10px', md: '16px' }}
      height="inherit"
    >
      {text}
    </Box>
  );
};

export default TradingRules;
