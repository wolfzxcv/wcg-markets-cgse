import { Locales, locales, localesOptions } from '@/i18n/config';
import { getCookie, isUsingMobile, setCookie } from '@/utils';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex
} from '@chakra-ui/react';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ImEarth } from 'react-icons/im';

type MobileLangSelectorProps = {
  uppercase?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const MobileLangSelector: React.FC<MobileLangSelectorProps> = ({
  uppercase,
  isOpen,
  onClose
}: MobileLangSelectorProps) => {
  const { t } = useTranslation('header');

  useEffect(() => {
    getCurrentLanguage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const getCurrentLanguage = () => {
    const langInCookie = getCookie('wcg-cgse-lang') as Locales;

    if (langInCookie && locales.includes(langInCookie)) {
      handleSetLanguage(langInCookie);
    } else {
      let lang = i18n?.languages[0] as Locales;
      if (isUsingMobile()) {
        // If it's a mobile, use substr(0, 2) to get lang ISO code, if it matches any of our app locales, set it as language
        const matchLang = navigator.languages
          .find((x) => x.substr(0, 2) === navigator.language.substr(0, 2))
          .substr(0, 2) as Locales;
        if (i18n?.languages.includes(matchLang)) {
          lang = matchLang;
        }
      }

      // to save locale in cookie
      setCookie('wcg-cgse-lang', lang, 30);
    }
  };

  const handleLanguageChange = (locale: Locales) => {
    handleSetLanguage(locale);
  };

  const handleSetLanguage = (locale: Locales) => {
    // to change router locale
    router.push(router.asPath, router.asPath, { locale: locale });

    // to save locale in cookie
    setCookie('wcg-cgse-lang', locale, 30);

    onClose();
  };

  return (
    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" onClick={onClose}>
          <Flex align="center" fontWeight="700" fontSize="16px">
            <Box mr="2">
              {uppercase ? t('language').toUpperCase() : t('language')}{' '}
            </Box>
            <ImEarth />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          {locales.map((locale) => (
            <Box
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              _hover={{
                cursor: 'pointer',
                bg: '#e2e2e2',
                opacity: 0.7
              }}
              px="5"
              py="2"
              transition="all .5s ease"
              fontWeight={700}
              color={currentLang === locale ? 'red.600' : 'inherit'}
            >
              {localesOptions.find((x) => x.code === locale)?.value || locale}
            </Box>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileLangSelector;
