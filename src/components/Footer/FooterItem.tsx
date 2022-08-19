import { FOOTER_FONT_COLOR, HOVER_PARAMS } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type FooterItemTitleProps = {
  text: string;
  href?: string;
};

type FooterItemProps = FooterItemTitleProps & {
  href?: string;
  isExternal?: boolean;
};

export const FooterItemTitle: React.FC<FooterItemTitleProps> = ({
  text,
  href
}: FooterItemTitleProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return href ? (
    <NextLink passHref={true} href={href} locale={currentLang}>
      <Box
        _hover={HOVER_PARAMS}
        fontSize={{ base: '14px', md: '20px' }}
        pb={5}
        fontWeight={700}
      >
        {text}
      </Box>
    </NextLink>
  ) : (
    <Box fontSize={{ base: '14px', md: '20px' }} pb={5} fontWeight={700}>
      {text}
    </Box>
  );
};

export const FooterItem: React.FC<FooterItemProps> = ({
  text,
  href,
  isExternal = false
}: FooterItemProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return href && isExternal ? (
    <Link key={text} _hover={HOVER_PARAMS} href={href} isExternal>
      <FooterItemBase text={text} />
    </Link>
  ) : href ? (
    <NextLink passHref={true} href={href} locale={currentLang}>
      <Box
        _hover={HOVER_PARAMS}
        fontSize={{ base: '12px', md: '14px' }}
        pb={1}
        pr={1}
        color={FOOTER_FONT_COLOR}
      >
        {text}
      </Box>
    </NextLink>
  ) : (
    <FooterItemBase text={text} />
  );
};

export const FooterItemBase: React.FC<FooterItemTitleProps> = ({
  text
}: FooterItemTitleProps) => (
  <Box
    fontSize={{ base: '12px', md: '14px' }}
    pb={1}
    pr={1}
    color={FOOTER_FONT_COLOR}
  >
    {text}
  </Box>
);
