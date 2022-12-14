import { links } from '@/assets/links';
import Wrapper from '@/components/Base/Wrapper';
import InViewSlideFade from '@/components/Common/InViewSlideFade';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const contact: React.FC<{}> = () => {
  const { t } = useTranslation('contact');

  return (
    <Wrapper>
      <Flex
        bgColor="#e45729"
        height="395px"
        bgImage="/../assets/images/contact_banner.jpg"
        bgPosition="center"
        justify="center"
        align="end"
      >
        <Flex
          flexDir="column"
          align="center"
          color="white"
          fontSize={{ base: '20px', md: '24px' }}
          mb={{ base: '20px', md: '50px' }}
          width={{ base: '90vw', md: '70vw' }}
        >
          <Box my={{ base: 5, md: 0 }}>{t('WeWholeheartedlyProvide')}</Box>
          <Box>{t('YouCanContact')}</Box>
          <Box
            border="1px"
            borderColor="white"
            width="250px"
            textAlign="center"
            py={2}
            my={5}
          >
            {t('OfficeHours')}
          </Box>
        </Flex>
      </Flex>
      <Flex bg="#e45729" justify="center">
        <Flex
          width={{ base: '90vw', md: '700px' }}
          justify={{ base: 'space-around', md: 'center' }}
          wrap="wrap"
          mt="50px"
          mb={{ base: '50px', md: '150px' }}
        >
          <ContactIcon
            onClick={openChatWindow}
            imageSrc="/../assets/images/contact_live_chat.png"
          />
          <ContactIcon
            href={`mailto:${links.email}`}
            imageSrc="/../assets/images/contact_email.png"
          />
          <ContactIcon
            href={`tel:${links.tel}`}
            imageSrc="/../assets/images/contact_tel.png"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

type ContactIconProps = {
  href?: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ContactIcon: React.FC<ContactIconProps> = ({
  href,
  imageSrc,
  onClick
}: ContactIconProps) => {
  return (
    <InViewSlideFade>
      <Link
        _hover={{
          opacity: 0.7,
          transition: '1s'
        }}
        mx={1}
        href={href}
        isExternal
      >
        <Image
          m={{ base: 0, md: 5 }}
          onClick={onClick}
          src={imageSrc}
          alt="icon"
        />
      </Link>
    </InViewSlideFade>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['contact', 'header', 'footer']))
  }
});

export default contact;
