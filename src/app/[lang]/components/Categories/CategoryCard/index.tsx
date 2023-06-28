'use client';

import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import VectorBlob from '@/app/assets/vector_blob.svg';
import classes from './index.module.css';
import { IconType } from 'react-icons/lib';
import { theme } from '@/theme';
interface Props {
  categoryTitle: string;
  imgPos: {
    bottom?: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    transform?: string;
  };
  icon: IconType;
}
export default function CategoryCard({
  categoryTitle,
  imgPos,
  icon: Icon,
}: Props) {
  return (
    <Card width="100%" height="100%" position="relative" overflow="hidden">
      <CardBody className={`${classes['cat-blob']}`}>
        <Box
          display="flex"
          justifyContent={'space-between'}
          alignItems="center"
          width="full"
          dir="ltr"
        >
          <Icon size={48} fill={theme.colors.ferra[500]} color={theme.colors.ferra[500]} />
          <Heading color={theme.colors.ferra[500]}>{categoryTitle}</Heading>
        </Box>
        <Image
          src={VectorBlob.src}
          alt="Water Blob"
          position="absolute"
          objectFit="cover"
          {...imgPos}
        />
      </CardBody>
    </Card>
  );
}
