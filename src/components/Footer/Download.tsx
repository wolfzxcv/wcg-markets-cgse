import { links } from '@/assets/links';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FooterItem, FooterItemTitle } from './FooterItem';

const Download: React.FC<{}> = () => {
  const { t } = useTranslation('footer');

  return (
    <>
      <Flex
        flexDir="column"
        width="25%"
        display={{ base: 'none', md: 'block' }}
      >
        <FooterItemTitle text={t('softwareDownload')} />

        <FooterItem text={t('IOSDownload')} href={links.mt4IOS} isExternal />

        <FooterItem
          text={t('AndroidDownload')}
          href={links.mt4Android}
          isExternal
        />

        <FooterItem
          text={t('WindowsDownload')}
          href={links.mt4App}
          isExternal
        />
      </Flex>
    </>
  );
};

export default Download;
