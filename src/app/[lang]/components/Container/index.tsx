'use client';

import React from 'react';
import { Container } from '@chakra-ui/react';
interface Props {
  children: React.ReactNode | React.ReactNode[];  
}
export default function PageContainer({ children }: Props) {
  return <Container maxW="container.lg">{children}</Container>;
}
