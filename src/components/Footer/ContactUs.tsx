import { links } from '@/assets/links';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItem, FooterItemTitle } from './FooterItem';

const ContactUs: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex
      flexDir="column"
      width={{ base: '100%', sm: '25%' }}
      align={{ base: 'center', sm: 'flex-start' }}
    >
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
    </Flex>
  );
};

export default ContactUs;
