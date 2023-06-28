'use client';
import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { GiFishBucket, GiShrimp, GiCrab } from 'react-icons/gi';

import Link from 'next/link';
import CategoryCard from './CategoryCard';

interface Props {
  dictionary: {
    fish: string;
    shrimp: string;
    crustaceans: string;
  };
}
export default function Categories({ dictionary }: Props) {
  return (
    <Grid templateColumns={'repeat(3, 1fr)'} gap={6} my={6}>
      <GridItem colSpan={{ base: 3, md: 1 }} minHeight="350px">
        <Link href="/">
          <CategoryCard
            categoryTitle={dictionary.fish}
            imgPos={{
              bottom: '-100px',
              right: '-60px',
            }}
            icon={GiFishBucket}
          />
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 3, md: 1 }} minHeight="350px">
        <Link href="/">
          <CategoryCard
            categoryTitle={dictionary.shrimp}
            imgPos={{
              bottom: '-100px',
              right: '-60px',
              transform: 'scaleX(-1)',
            }}
            icon={GiShrimp}
          />
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 3, md: 1 }} minHeight="350px">
        <Link href="/">
          <CategoryCard
            categoryTitle={dictionary.crustaceans}
            imgPos={{
              bottom: '-100px',
              right: '-160px',
            }}
            icon={GiCrab}
          />
        </Link>
      </GridItem>
    </Grid>
  );
}
