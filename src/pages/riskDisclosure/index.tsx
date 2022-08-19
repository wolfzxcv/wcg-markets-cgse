import Wrapper from '@/components/Base/Wrapper';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const riskDisclosure: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');
  return (
    <Wrapper>
      <Flex my={10} direction="column" align="center">
        <Stack spacing={1}>
          <Heading size="lg">{t('riskDisclosure')} </Heading>
        </Stack>
        <Stack spacing={1} w={'60vw'} fontSize={'16px'}>
          <Text>
            {t('thisStatementDoesNot')}
            {t('inViewOfTheRelevant')}
            {t('customersMustCarefully')}
            {t('customersShouldSeekLegal')}
          </Text>
          {/* 1.杠桿式效應 */}
          <Text fontWeight={'bold'}>{t('leverageEffect')}</Text>
          <Text>
            {t('tradingPreciousMetals')}
            {t('thisTypeOfTransaction')}
            {t('evenAnyMovementInTheMarket')}
            {t('ThisCustomerHasTheOpportunity')}
            {t('ifTheMarketChanges')}
          </Text>
          {/* 2.減少風險的指令 */}
          <Text fontWeight={'bold'}>{t('directivesTo')}</Text>
          <Text>
            {t('ordersThatLimitLosses')}
            {t('ifTheOrder')}
            {t('inAdditionSomeStrategies')}
          </Text>
          <Heading fontSize={'medium'}>{t('risksArisingFromOther')}</Heading>
          {/* 3.貴金屬及差價合約交易的條件與條款 */}
          <Text fontWeight={'bold'}>{t('termsAndConditions')}</Text>
          <Text>{t('customersMustClearly')}</Text>
          {/* 4.電子交易 */}
          <Text fontWeight={'bold'}>{t('electronicTransactions')}</Text>
          <Text>
            {t('transactionsConducted')}
            {t('customersWillBeExposed')}
            {t('thereforeTheCustomerAcknowledges')}
          </Text>
          {/* 5.交易設施 */}
          <Text fontWeight={'bold'}>{t('tradingFacilities')}</Text>
          <Text>
            {t('mostElectronic')}
            {t('customersAbilityToRecover')}
          </Text>
          {/* 6.交易所場外交易 */}
          <Text fontWeight={'bold'}>{t('exchangeOverTheCounter')}</Text>
          <Text>
            {t('inSomeJurisdictions')}
            {t('WenChuanInternational')}
            {t('soClosing')}
          </Text>
          {/* 7.暫停或限制交易與定價的關系 */}
          <Text fontWeight={'bold'}>{t('suspensionOrRestriction')}</Text>
          <Text>
            {t('marketCondition')}
            {t('inAdditionTheNormal')}
          </Text>
          {/* 8.在其他司法管轄區的交易 */}
          <Text fontWeight={'bold'}>{t('transactionsInOther')}</Text>
          <Text>
            {t('transactionsInOtherJurisdiction')}
            {t('beforeCommencing')}
          </Text>
          {/* 9.存放的現金與財物 */}
          <Text fontWeight={'bold'}>{t('depositedCash')}</Text>
          <Text>
            {t('customersMustAcknowledge')}
            {t('theExtentTo')}
          </Text>

          {/*10.客户非本人存款安排  */}
          <RiskDisclosureItem
            title={t('arrangementsFor')}
            content={[
              `${t('inOrderTo')}`,
              `${t('WenChuanInternationalDoes')}${t('ifTheCustomerUsesAn')}`,
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
            <Heading size="lg">{t('customerWarning')} </Heading>
          </Stack>

          <RiskDisclosureItem
            title=""
            content={[
              //1
              `${t('thisAgreement')}`,
              //2
              `${t('aboutOpening')}${t('theCustomer')}`,
              `${t('tradingIsOnly')}`,
              //3
              `${t('bushinessDoes')}${t('manyElectronic')}`,
              //4
              `${t('inTheOTC')}${t('circumstancesThat')}`,
              //5
              `${t('ifTheCustomerEngages')}${t('systemFailures')}`,
              //6
              `${t('theCustomerConfirms')}${t('forAllSales')}${t(
                'theTimeAndPlace'
              )}${t('theTimeAndPlace')}`,
              `${t('theCompany')}${t('inAddition')}`,
              // 7
              `${t('theCompanyMargin')}${t('otherwiseThePosition')}`,
              // 8
              `${t('ifAnyCustomer')}`,
              //9
              `${t('ifTheCustomerEntrusts')} 
              ${t('theCompanyDoesNot')}${t('ifTheCustomerDoes')}              `,
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
    <Text fontWeight={'bold'}>{title}</Text>
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
