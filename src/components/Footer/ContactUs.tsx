import { links } from '@/assets/links';
import { HOVER_PARAMS } from '@/assets/styleConfig';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItem, FooterItemTitle } from './FooterItem';

const ContactUs: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex flexDir="column" width={{ base: '100%', md: '25%' }}>
      <FooterItemTitle text={t('contactUs')} />

      <FooterItem
        text={`TEL: ${links.tel}`}
        href={`tel:${links.tel}`}
        isExternal
      />

      <FooterItem
        text={`EMAIL: ${links.email}`}
        href={`mailto:${links.email}`}
        isExternal
      />

      <Flex mt={5}>
        <Box mr={5} _hover={HOVER_PARAMS} onClick={openChatWindow}>
          <Image
            width="22px"
            height="20px"
            src="/../assets/images/live_chat_icon.png"
            alt="live_chat"
          />
        </Box>
        <Link mr={5} _hover={HOVER_PARAMS} href={links.wechat} isExternal>
          <Image
            width="27px"
            height="23px"
            src="/../assets/images/wechat_icon.png"
            alt="wechat"
          />
        </Link>

        <Link _hover={HOVER_PARAMS} href={links.weibo} isExternal>
          <Image
            width="27px"
            height="23px"
            src="/../assets/images/weibo_icon.png"
            alt="weibo"
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
