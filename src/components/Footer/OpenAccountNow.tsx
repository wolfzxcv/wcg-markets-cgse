import { links } from '@/assets/links';
import { HOVER_PARAMS } from '@/assets/styleConfig';
import { openChatWindow } from '@/utils';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItem, FooterItemTitle } from './FooterItem';

const OpenAccountNow: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <Flex flexDir="column" width={{ base: '50%', sm: '25%' }}>
      <FooterItemTitle text={t('openAccount')} />

      <FooterItem
        text={t('openRealAccount')}
        href={links.register}
        isExternal
      />

      <Box _hover={HOVER_PARAMS} onClick={openChatWindow}>
        <FooterItem text={t('openDemoAccount')} />
      </Box>
    </Flex>
  );
};

export default OpenAccountNow;
