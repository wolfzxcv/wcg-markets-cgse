import {
  COMMON_BG,
  COMMON_FONT_COLOR,
  HOVER_PARAMS,
  LIVE_CHAT_BORDER
} from '@/assets/styleConfig';
import { Locales, locales, localesOptions } from '@/i18n/config';
import { getCookie, setCookie } from '@/utils';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DesktopLangSelector: React.FC<{}> = () => {
  useEffect(() => {
    getCurrentLanguage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [language, setLanguage] = useState(i18n?.languages[0]);

  const router = useRouter();

  const getCurrentLanguage = () => {
    const langInCookie = getCookie('wcg-cgse-lang') as Locales;

    if (langInCookie && locales.includes(langInCookie)) {
      handleSetLanguage(langInCookie);
    } else {
      let lang = i18n?.languages[0] as Locales;

      // Check browser language manually
      const isCN =
        (window as any)?.navigator.languages.includes('zh-CN') ||
        (window as any)?.navigator.languages.includes('zh-cn') ||
        null;

      if (isCN) {
        lang = 'cn';
      }

      // to save locale in cookie
      setCookie('wcg-cgse-lang', lang, 30);
    }
  };

  const handleLanguageChange = (locale: Locales) => {
    handleSetLanguage(locale);
  };

  const handleSetLanguage = (locale: Locales) => {
    // to show option in select
    setLanguage(locale);

    // to change router locale
    router.push(router.asPath, router.asPath, { locale: locale });

    // to save locale in cookie
    setCookie('wcg-cgse-lang', locale, 30);
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            minW="90px"
            as={Box}
            border="1px"
            borderColor={LIVE_CHAT_BORDER}
            bg={COMMON_BG}
            color={COMMON_FONT_COLOR}
            px={2}
            py={1}
            align="center"
          >
            <Flex align="center" justify="center">
              {localesOptions.find((x) => x.code === language)?.value ||
                language}
              <Box
                ml="1"
                transform={isOpen ? 'rotate(180deg)' : 'none'}
                transition="ease-in-out 0.5s"
                borderWidth="5px 5px 0 5px"
                borderColor={`${LIVE_CHAT_BORDER} transparent transparent transparent`}
              ></Box>
            </Flex>
          </MenuButton>
          <MenuList
            minW="90px"
            zIndex="3"
            borderRadius="0px"
            p="0"
            border="1px"
            borderColor={LIVE_CHAT_BORDER}
            bg={COMMON_BG}
          >
            {locales.map((locale: Locales) => (
              <MenuItem
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                color={COMMON_FONT_COLOR}
                _hover={{ bg: 'transparent', ...HOVER_PARAMS }}
                style={{
                  backgroundColor: COMMON_BG
                }}
              >
                <Text display="block">
                  {localesOptions.find((x) => x.code === locale)?.value ||
                    locale}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default DesktopLangSelector;
