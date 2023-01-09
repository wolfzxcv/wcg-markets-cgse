import { links } from '@/assets/links';
import { scrollToTop } from '@/utils';
import { Box, Flex, IconButton, Image, Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BiArrowToTop } from 'react-icons/bi';

const StyledIconButton = styled(IconButton)``;

const BackToTop: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Box zIndex={101} position="fixed" bottom={'50px'} right="3">
        <Flex direction={'column'} color="white">
          <BackToTopBaseButton
            label={t('Miduoke')}
            href={links.majkf}
            icon={
              <Image
                width="30px"
                height="30px"
                src="/../assets/images/Miduoke.svg"
                alt="Miduoke"
              />
            }
          />

          <BackToTopBaseButton
            label={t('LiveChat')}
            href={links.liveChat}
            icon={<AiOutlineMessage fontSize="32px" />}
          />

          <BackToTopBaseButton
            label={t('top')}
            onClick={scrollToTop}
            icon={<BiArrowToTop fontSize="32px" />}
          />
        </Flex>
      </Box>
    </>
  );
};

type BackToTopBaseButtonProps = {
  label: string;
  icon: JSX.Element;
  onClick?: () => void | boolean;
  href?: string;
};

const BackToTopBaseButton: React.FC<BackToTopBaseButtonProps> = ({
  label,
  icon,
  onClick,
  href
}: BackToTopBaseButtonProps) => {
  return (
    <Tooltip label={label} aria-label={label} placement="left">
      <StyledIconButton
        onClick={onClick}
        href={href}
        as={href ? 'a' : 'button'}
        target={href && href.includes('http') ? '_blank' : ''}
        mb={3}
        borderRadius="50%"
        aria-label={label}
        aria-hidden
        icon={icon}
        bgColor="gray.700"
        borderColor="white"
        border="1px"
        _hover={{
          bgColor: 'red.600',
          transition: '1s',
          transform: 'scale(1.2)'
        }}
      />
    </Tooltip>
  );
};

export default BackToTop;
