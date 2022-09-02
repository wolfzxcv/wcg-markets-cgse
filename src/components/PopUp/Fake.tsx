import { Box, Image, Text, VStack } from '@chakra-ui/react';

import PopUp from './PopUp';

const ClarifyClaim: React.FC<{}> = () => {
  return (
    <VStack spacing={5} p={5}>
      <Text as="b">
        澄清聲明:
        假冒網站「https://m.dzfx168.com」及「https://img.dzg228.com」與本集團及旗下業務絕無任何關聯
      </Text>
      <Text>
        致廣大客戶及投資者:
        <br />
        <br />
        本集團客服近日收到客戶查詢，得悉有自稱為「https://m.dzfx168.com」及「https://img.dzg228.com」的網站假冒本集團。有關網站在未有本集團的授權、同意及/或批准下使用及展示與本集團或與本集團相似的商業名稱或商標提供網上交易活動，誘使公眾誤信其與本集團有關。
        <br /> <br />
        有關網站截圖如下:
      </Text>
      <Box>
        <Image src={`../assets/images/pop_up_fake.png`} alt="pop_up_fake" />
      </Box>
      <Text>
        現謹鄭重聲明，WCG MARKETS (HK)
        LIMITED文傳金業有限公司「本公司」及旗下各業務單位一概與上述集團、其業務及網頁無任何關聯。
        <br />
        <br />
        鑑於是次事件懷疑有人利用本集團之商譽，誤導大眾以謀利，本集團予以高度關注。現特此聲明，以正視聽，並務請所有投資者提高警惕，以免受到欺詐損失，同時保留一切追究法律責任的權利。
        <br />
        <br />
        如有疑問，歡迎與http://www.wcghk.com 客戶服務部聯絡。
        <br />
        <br />
        WCG MARKETS (HK) LIMITED <br />
        <br />
        文傳金業有限公司 謹啟
        <br />
        <br />
        二零二二年八月三十一日
        <br />
      </Text>
    </VStack>
  );
};

const Claim: React.FC<{}> = () => {
  return (
    <PopUp
      title="警惕蓄意欺詐仿冒網站"
      content={<ClarifyClaim />}
      useBorder={false}
    />
  );
};

export default Claim;
