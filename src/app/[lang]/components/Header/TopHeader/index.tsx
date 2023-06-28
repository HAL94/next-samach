'use client';

import useLocaleSwitcher from '@/app/hooks/use-locale-switcher';
import { i18n } from '@/i18n-config';
import {
  Box,
  Button,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import AppLoadingOverlay from '../../AppLoadingOverlay';
import { BiChevronDown } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { theme } from '@/theme';
const LANGS = {
  en: 'English',
  ar: 'العربية',
};

interface Props {
  dictionary: any;
}

export default function TopHeader({ dictionary }: Props) {
  const { langLoading, redirectedPathName } = useLocaleSwitcher();
  const params = useParams();
  return (
    <Container
      maxW="container.xs"
      borderBottom="1px"
      borderColor={'#ddd'}
      bg="white"
      mb={2}
      dir="ltr"
      display={{ base: 'none', lg: 'block' }}
    >
      {langLoading && <AppLoadingOverlay />}
      <Container
        maxW="container.lg"
        display="flex"
        flexDir={'row'}
        gap={6}
        pb={2}
        justifyContent="space-between"
      >
        <Box
          aria-label="ContactNumber"
          display="flex"
          justifyContent={'center'}
          gap={3}
          alignItems="center"
        >
          <Box aria-label="Contact Number" display="flex" gap={2}>
            <BsTelephone color={theme.colors.neptune[500]} size={18} />
            <Text fontSize="sm" color={theme.colors.neptune[500]}>
              (+966) 13 342 534
            </Text>
          </Box>
          <Box aria-label="Privacy Policy">
            <Link href="/privacy-policy">
              <Button variant="link" colorScheme={'neptune'}>
                <Text fontSize="sm">{dictionary.header.privacyPolicy}</Text>
              </Button>
            </Link>
          </Box>
          <Box aria-label="Return Policy">
            <Button variant="link" colorScheme={'neptune'}>
              <Text fontSize="sm">{dictionary.header.returnPolicy}</Text>
            </Button>
          </Box>
          <Box aria-label="Order & Delivery Policy">
            <Button variant="link" colorScheme={'neptune'}>
              <Text fontSize="sm">{dictionary.header.orderDeliveryPolicy}</Text>
            </Button>
          </Box>
        </Box>

        <Box
          aria-label="Language Box"
          position="relative"
          gap={2}
          display="flex"
        >
          <Menu>
            <MenuButton
              colorScheme={'neptune'}
              variant="link"
              textDecorationStyle={'unset'}
              _hover={{ textDecorationStyle: 'unset' }}
              as={Button}
              rightIcon={<BiChevronDown size={18} />}
            >
              <Heading size="xs">{LANGS[params?.lang as 'en' | 'ar']}</Heading>
            </MenuButton>
            <MenuList zIndex={10}>
              {i18n.locales.map((locale, index) => (
                <MenuItem
                  onClick={() => redirectedPathName(locale)}
                  key={`locale_${index}`}
                >
                  {LANGS[locale]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Container>
  );
}
