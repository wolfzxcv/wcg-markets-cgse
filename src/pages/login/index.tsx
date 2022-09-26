import LangSelector from '@/components/Login/LangSelector';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

const RED = '#B81C22';

const GRAY = '#92A5C3';

const BG = '#f4f4f4';

const login: React.FC<{}> = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      flexDir="column"
      bg={BG}
      bgImage="/../assets/images/login_bg.png"
      bgPosition="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Flex justify="center">
        <Flex width="100%" maxW="1280px" justify="space-between" align="center">
          <Box p="15px">
            <Link href="/">
              <Image
                width="42px"
                height="42px"
                display={{ base: 'block', md: 'none' }}
                src="/../assets/images/login_logo_mobile.svg"
                alt="logo"
              />
              <Image
                width="160px"
                height="110px"
                display={{ base: 'none', md: 'block' }}
                src="/../assets/images/login_logo_pc.svg"
                alt="logo"
              />
            </Link>
          </Box>
          <Box>
            <LangSelector />
          </Box>
        </Flex>
      </Flex>
      <Flex
        justify={'center'}
        fontSize={{ base: '20px', md: '24px' }}
        mt="10px"
        mb="45px"
      >
        Welcome into &nbsp;<b>WCG Markets (HK) Limited</b>
      </Flex>
      <Flex flexDir="column" align="center">
        <Box
          bg={RED}
          color="white"
          width="95vw"
          maxW="450px"
          textAlign="center"
          fontSize="15px"
          fontWeight="500"
          padding="10px 25px 11px 25px"
          borderRadius="8px 8px 0px 0px"
        >
          Not a member?{' '}
          <Link href="/login" _hover={{ textDecoration: 'none' }}>
            Sign up now!
          </Link>
        </Box>
        <Flex
          flexDir="column"
          bg="white"
          borderRadius="0px 0px 8px 8px"
          width="95vw"
          maxW="450px"
          p="40px"
          mb="5px"
          align="center"
        >
          <Box fontSize={{ base: '20px', md: '24px' }}>Sign in</Box>
          <Box color={GRAY} fontSize="12px">
            to access your account
          </Box>

          <FormControl width="100%">
            <Box color={GRAY}>
              <FormLabel htmlFor="Email">
                Email <span style={{ color: 'red' }}>*</span>
              </FormLabel>
              <Input variant="flushed" focusBorderColor="#000" />
              <FormLabel htmlFor="Password" mt="20px">
                Password <span style={{ color: 'red' }}>*</span>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  variant="flushed"
                  focusBorderColor="#000"
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="md"
                    bg="white"
                    onClick={handleClick}
                  >
                    {show ? <BiShow /> : <BiHide />}
                  </Button>
                </InputRightElement>
              </InputGroup>{' '}
            </Box>
          </FormControl>

          <Box
            bg={'rgba(0,0,0,.26);'}
            _hover={{ cursor: 'not-allowed' }}
            color="white"
            textAlign="center"
            width="90%"
            maxW="290px"
            borderRadius="8px"
            padding="10px 25px"
            fontWeight="500"
            mt="40px"
          >
            Sign in
          </Box>

          <Box color={RED} mt="20px" _hover={{ cursor: 'pointer' }}>
            Forgot your password?
          </Box>
        </Flex>
      </Flex>
      <Flex flexDir="column" color={GRAY} my="12px" fontSize="12px">
        <Box textAlign="center">
          Contact us at{' '}
          <Link
            color={RED}
            href="mailto:support@wcghk.com"
            _hover={{ textDecoration: 'none' }}
          >
            {' '}
            support@wcghk.com
          </Link>
        </Box>
        <Box textAlign="center">support@wcghk.com</Box>
      </Flex>
      <Flex justify="center" fontSize="10px">
        <Box
          width={{ base: '90vw', md: '760px', lg: '920px', xl: '1280px' }}
          pt="30px"
          pb={{ base: '30px', md: '150px' }}
        >
          WCG Markets (HK) Limited is a limited company registered under Hong
          Kong. The company number is 2028151. High-risk investment warning:
          Precious metals (PM) are complex financial products, and their use of
          leveraged trading attributes is likely to cause rapid loss of
          principal, and you may be required to call for margin. Please
          understand the product principles of PMs and consider whether you can
          withstand this risk before entering the market. The past prices and
          performance of all financial derivatives instruments do not guarantee
          or represent future trends. Such financial products are not suitable
          for all investors. Please be sure to fully understand all potential
          risks before entering the market and seek independent advice when
          necessary. Restricted areas: WCG Markets (HK) Limited&apos;s website
          information does not aimed at targeting residents of British Columbia,
          Quebec and Saskatchewan, the Democratic People&apos;s Republic of
          Korea (North Korea), Iran, the United States; And not to send or use
          the information to people in countries or jurisdictions where the
          publication or use of this information violates local laws and
          regulations.
        </Box>
      </Flex>
    </Flex>
  );
};

export default login;
