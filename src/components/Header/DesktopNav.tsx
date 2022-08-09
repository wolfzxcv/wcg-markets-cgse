import { IMenuItem, menuList } from '@/assets/menuList';
import {
  HOVER_PARAMS,
  LIVE_CHAT_BORDER,
  TRANSITION
} from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Flex, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const DesktopNav: React.FC<{}> = () => {
  return (
    <Flex color="white">
      {menuList.map((each) => (
        <DesktopNavItem
          key={each.i18n}
          i18n={each.i18n}
          href={each.href}
          isExternal={each.isExternal}
        />
      ))}
    </Flex>
  );
};

const DesktopNavItem: React.FC<IMenuItem> = ({
  i18n,
  href,
  isExternal = false
}: IMenuItem) => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return isExternal ? (
    <Link href={href} isExternal _hover={HOVER_PARAMS}>
      <Box px={4} transition={TRANSITION}>
        {t(i18n)}
      </Box>
    </Link>
  ) : (
    <NextLink passHref={true} href={href} locale={currentLang}>
      <Box
        _hover={HOVER_PARAMS}
        px={4}
        transition={TRANSITION}
        color={router.pathname === href ? LIVE_CHAT_BORDER : 'inherit'}
      >
        {t(i18n)}
      </Box>
    </NextLink>
  );
};

export default DesktopNav;
