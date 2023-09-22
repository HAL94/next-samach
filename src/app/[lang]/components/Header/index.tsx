'use client';
import { Container } from '@chakra-ui/react';

import useLocaleSwitcher from '@/app/hooks/use-locale-switcher';
import AppLoadingOverlay from '../AppLoadingOverlay';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

export default function Header() {
  const { langLoading } = useLocaleSwitcher();
  return (
    <Container
      maxW="container.xs"
      bg="white"
      sx={{ py: 3, mb: 3 }}
      px={0}
      boxShadow={'rgba(0, 0, 0, 0.12) 0px 3px 8px;'}
      role="header"
    >
      {langLoading && <AppLoadingOverlay />}
      <TopHeader />
      <BottomHeader />
    </Container>
  );
}
