import {
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

  return (
    <Flex justify="center">
      <Flex
        width="95vw"
        maxW="1100px"
        flexDir="column"
        mb={{ base: 10, md: '100px' }}
      >
        <InViewSlideFade>
          <Flex flexDir="column">
            {/* title */}
            <Flex flexDir="column" align="center" mb={{ base: 10, md: 20 }}>
              {isChinese && (
                <Flex>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={300}
                    color={FOOTER_FONT_COLOR}
                  >
                    {t('trading')}
                  </Text>
                  <Text
                    fontSize={{
                      base: '36px',
                      md: '48px'
                    }}
                    fontWeight={700}
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

                <Flex flexDir="column" width="30%">
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

                <Flex flexDir="column" width="30%">
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
            </Flex>
            {/* Table ends */}
          </Flex>
        </InViewSlideFade>
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
      py={removePadding ? 0 : 3}
      fontWeight={700}
      fontSize={{ base: '10px', md: '16px' }}
    >
      {text}
    </Box>
  );
};

export default TradingRules;
