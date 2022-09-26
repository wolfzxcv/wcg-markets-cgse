import { Header } from '@/i18n/localests/@types/header';
import { links } from './links';

export type IMenuItem = {
  i18n: keyof Header;
  href: string;
  isExternal?: boolean;
};

export const menuList: IMenuItem[] = [
  {
    i18n: 'home',
    href: '/'
  },
  {
    i18n: 'about',
    href: '/about'
  },
  {
    i18n: 'contact',
    href: '/contact'
  },
  { i18n: 'announcement', href: '/announcement' },
  {
    i18n: 'openAccount',
    href: links.register,
    isExternal: true
  },
  {
    i18n: 'userCenter',
    href: links.userCenter,
    isExternal: true
  }
];
