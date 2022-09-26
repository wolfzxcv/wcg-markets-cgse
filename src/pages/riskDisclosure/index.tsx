import { FONT_WEIGHT } from '@/assets/styleConfig';
import Wrapper from '@/components/Base/Wrapper';
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const riskDisclosure: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');
  return (
    <Wrapper>
      <Flex my={10} direction="column" align="center">
        <Stack spacing={1}>
          <Heading fontSize="30px">{t('riskDisclosure')} </Heading>
        </Stack>
        <Image my={3} src="/../assets/images/home_divider.png" alt="divider" />

        <Stack spacing={3} w={'60vw'} fontSize={'16px'}>
          <RiskDisclosureItem
            title=""
            content={[
              `${t('thisStatementDoesNot')}${t('inViewOfTheRelevant')}${t(
                'customersMustCarefully'
              )}${t('customersShouldSeekLegal')}`
            ]}
          />

          {/* 1.杠桿式效應 */}
          <RiskDisclosureItem
            title={t('leverageEffect')}
            content={[
              `${t('tradingPreciousMetals')}${t('thisTypeOfTransaction')}${t(
                'evenAnyMovementInTheMarket'
              )}${t('ThisCustomerHasTheOpportunity')}${t('ifTheMarketChanges')}
              `
            ]}
          />
          {/* 2.減少風險的指令 */}
          <RiskDisclosureItem
            title={t('directivesTo')}
            content={[
              `${t('ordersThatLimitLosses')}${t('ifTheOrder')}${t(
                'inAdditionSomeStrategies'
              )}`
            ]}
          />
          <Heading fontSize={'medium'}>{t('risksArisingFromOther')}</Heading>
          {/* 3.貴金屬及差價合約交易的條件與條款 */}
          <RiskDisclosureItem
            title={t('termsAndConditions')}
            content={[`${t('customersMustClearly')}`]}
          />
          {/* 4.電子交易 */}
          <RiskDisclosureItem
            title={t('electronicTransactions')}
            content={[
              `${t('transactionsConducted')}${t('customersWillBeExposed')}${t(
                'thereforeTheCustomerAcknowledges'
              )}`
            ]}
          />
          {/* 5.交易設施 */}
          <RiskDisclosureItem
            title={t('tradingFacilities')}
            content={[
              `${t('mostElectronic')}${t('customersAbilityToRecover')}`
            ]}
          />
          {/* 6.交易所場外交易 */}
          <RiskDisclosureItem
            title={t('exchangeOverTheCounter')}
            content={[
              `${t('inSomeJurisdictions')}${t('WCGMarkets')} ${t('soClosing')}`
            ]}
          />
          {/* 7.暫停或限制交易與定價的關系 */}
          <RiskDisclosureItem
            title={t('suspensionOrRestriction')}
            content={[`${t('marketCondition')}${t('inAdditionTheNormal')}`]}
          />
          {/* 8.在其他司法管轄區的交易 */}
          <RiskDisclosureItem
            title={t('transactionsInOther')}
            content={[
              `${t('transactionsInOtherJurisdiction')}${t('beforeCommencing')}`
            ]}
          />

          {/* 9.存放的現金與財物 */}
          <RiskDisclosureItem
            title={t('depositedCash')}
            content={[`${t('customersMustAcknowledge')}${t('theExtentTo')}`]}
          />
          {/*10.客户非本人存款安排  */}
          <RiskDisclosureItem
            title={t('arrangementsFor')}
            content={[
              `${t('inOrderTo')}`,
              `${t('WCGMarketsDoes')}${t('ifTheCustomerUsesAn')}`,
              `${t('ifTheCustomerAccount')}`,
              `${t('ifTheTransaction')}${t('afterDeducting')}`,
              `${t('forTheAbove')} ${t('tradingCommissions1')}`
            ]}
          />
          {/*11  */}
          <RiskDisclosureItem
            title={t('tradingCommissions2')}
            content={[`${t('customersShouldUnderstand')}`]}
          />

          {/*12  */}
          <RiskDisclosureItem
            title={t('accountUse')}
            content={[`${t('ifThereIs')}`]}
          />

          {/*客戶告鑒*/}
          <Stack spacing={1} align="center">
            <Heading fontSize="30px">{t('customerWarning')} </Heading>
          </Stack>

          <RiskDisclosureItem
            title=""
            content={[
              //
              `${t('thisAgreement')}`,
              //
              `${t('aboutOpening')}${t('theCustomerConfirms')}`,
              //1
              `${t('tradingIsOnly')}`,
              //2
              `${t('bushinessDoes')}${t('manyElectronic')}`,
              //3
              `${t('inTheOTC')}${t('circumstancesThat')}`,
              //4
              `${t('ifTheCustomerEngages')}${t('systemFailures')} `,
              //5
              `${t('thatThePurchase')}${t('forAllSales')}${t(
                'theTimeAndPlace'
              )}`,
              //6
              `${t('theCompany')}${t('inAddition')}`,
              //7
              `${t('theCompanyMargin')}${t('otherwiseThePosition')}`,
              //8
              `${t('ifAnyCustomer')}`,
              //9
              `${t('ifTheCustomerEntrusts')} 
              ${t('theCompanyDoesNot')}${t('ifTheCustomerDoes')}`,
              //10
              `${t('customersShould')}${t('transactionsMade')}`,
              //11
              `${t('allCustomers')}`
            ]}
          />
        </Stack>
      </Flex>
    </Wrapper>
  );
};

type RiskDisclosureItemProps = {
  title: string;
  content: string[];
};

const RiskDisclosureItem: React.FC<RiskDisclosureItemProps> = ({
  title,
  content
}: RiskDisclosureItemProps) => (
  <>
    <Text fontSize="22px" fontWeight={FONT_WEIGHT}>
      {title}
    </Text>
    {content.map((each) => (
      <Text key={each}>{each}</Text>
    ))}
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'conditions',
      'header',
      'footer'
    ]))
  }
});

export default riskDisclosure;
