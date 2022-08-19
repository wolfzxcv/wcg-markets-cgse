import { DARK_GRAY } from '@/assets/styleConfig';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import InViewSlideFade from '../Common/InViewSlideFade';

const CapitalCreatesTheFuture: React.FC<{}> = () => {
  const { t } = useTranslation('about');

  return (
    <InViewSlideFade>
      <Flex justify="center" my={{ base: 20, md: '150px' }}>
        {/* title */}
        <Flex
          flexDir="column"
          align="center"
          mb={{ base: 10, md: 20 }}
          width={{ base: '80vw', md: '40vw' }}
        >
          <Flex>
            <Text
              fontSize={{
                base: '36px',
                md: '48px'
              }}
              color={DARK_GRAY}
            >
              {t('capitalCreates')}
            </Text>
            <Text
              fontSize={{
                base: '36px',
                md: '48px'
              }}
            >
              {t('theFuture')}
            </Text>
          </Flex>

          <Box textAlign="center" color={DARK_GRAY} mt={5}>
            {t('WCGHasASolidFoundation')}
          </Box>
        </Flex>
      </Flex>
    </InViewSlideFade>
  );
};

export default CapitalCreatesTheFuture;
