import { links } from '@/assets/links';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const SocialMediaLinks: React.FC<{}> = () => {
  const { t } = useTranslation('footer');
  return (
    <Flex flexDirection="column" display={{ base: 'none', md: 'block' }}>
      <Box mb="1">{t('followUs')}</Box>
      <Flex>
        <Link
          _hover={{
            bgColor: '#3b5998',
            transition: '1s',
            borderRadius: '10px'
          }}
          p="1"
          mx="1"
          href={links.facebook}
          isExternal
        >
          <Image
            width="15px"
            height="20px"
            src="../assets/images/facebook.png"
            alt="Facebook"
          />
        </Link>

        <Link
          _hover={{
            bgColor: '#dd2a7b',
            transition: '1s',
            borderRadius: '10px'
          }}
          p="1"
          mx="1"
          href={links.instagram}
          isExternal
        >
          <Image
            width="18px"
            height="20px"
            src="../assets/images/instagram.png"
            alt="Instagram"
          />
        </Link>

        <Link
          _hover={{
            bgColor: '#b00',
            transition: '1s',
            borderRadius: '10px'
          }}
          p="1"
          mx="1"
          href={links.weibo}
          isExternal
        >
          <Image
            width="20px"
            height="20px"
            src="../assets/images/weibo.png"
            alt="Weibo"
          />
        </Link>

        <Link
          _hover={{
            bgColor: '#7BB32E',
            transition: '1s',
            borderRadius: '10px'
          }}
          p="1"
          mx="1"
          href={links.wechat}
          isExternal
        >
          <Image
            width="20px"
            height="20px"
            src="../assets/images/wechat.png"
            alt="wechat"
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default SocialMediaLinks;
