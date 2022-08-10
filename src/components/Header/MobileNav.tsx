import { IMenuItem, menuList } from '@/assets/menuList';
import { LIVE_CHAT_BORDER, TRANSITION } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose
}: MobileNavProps) => {
  const { t } = useTranslation('header');

  return (
    <Drawer
      placement={'right'}
      onClose={onClose}
      isOpen={isOpen}
      blockScrollOnMount={true}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" onClick={onClose}>
          <Flex align="center" fontWeight="700" fontSize="16px">
            <AiOutlineMenu />
            <Box ml="2">{t('menu').toUpperCase()}</Box>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex flexDirection="column">
            {menuList.map((each) => (
              <MobileNavItem
                key={each.i18n}
                i18n={each.i18n}
                href={each.href}
                isExternal={each.isExternal}
              />
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem: React.FC<IMenuItem> = ({
  i18n,
  href,
  isExternal = false
}: IMenuItem) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return isExternal ? (
    <Link href={href} isExternal _hover={{ textDecoration: 'none' }}>
      <MobileNavItemBase i18n={i18n} />
    </Link>
  ) : (
    <NextLink passHref={true} href={href} locale={currentLang}>
      <MobileNavItemBase
        i18n={i18n}
        color={router.pathname === href ? LIVE_CHAT_BORDER : undefined}
      />
    </NextLink>
  );
};

type MobileNavItemBaseProps = {
  color?: string;
  i18n: IMenuItem['i18n'];
  onClick?: () => void;
};

const MobileNavItemBase = forwardRef<HTMLDivElement, MobileNavItemBaseProps>(
  (
    { color = 'inherit', i18n, onClick, ...rest }: MobileNavItemBaseProps,
    ref
  ) => {
    const { t } = useTranslation('header');
    return (
      <Box
        ref={ref}
        {...rest}
        color={color}
        px="5"
        py="2"
        transition={TRANSITION}
        fontWeight="700"
        onClick={onClick}
      >
        {t(i18n).toUpperCase()}
      </Box>
    );
  }
);

MobileNavItemBase.displayName = 'MobileNavItemBase';

export default MobileNav;
