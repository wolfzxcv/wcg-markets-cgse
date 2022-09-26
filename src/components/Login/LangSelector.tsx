import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';

type ILang = 'EN' | 'ZH';

const LangSelector: React.FC<{}> = () => {
  const [lang, setLang] = useState('EN');

  const handleLanguageChange = (locale: ILang) => {
    setLang(locale);
  };

  return (
    <Menu>
      <MenuButton
        minW="90px"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="#f4f4f4"
        _hover={{ bg: '#f4f4f4' }}
        fontSize="17px"
      >
        {lang}
      </MenuButton>
      <MenuList minW={{ base: '90px', md: '150px' }} zIndex={3}>
        <MenuItem onClick={() => handleLanguageChange('EN')}>
          <Image src={`/../assets/images/login_lang_EN.png`} alt="EN"></Image>
          <Text ml={4}>EN</Text>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ZH')}>
          <Image src={`/../assets/images/login_lang_ZH.png`} alt="ZH"></Image>
          <Text ml={4}>ZH</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LangSelector;
