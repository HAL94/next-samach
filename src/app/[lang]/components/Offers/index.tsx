'use client';

import { theme } from '@/theme';
import { Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import ProductCard from '../Product/ProductCard';

interface Props {
  result: any;
  lang: 'en' | 'ar';
  dictionary: any;
}

export default function Offers({ result, lang, dictionary }: Props) {
  const isRTL = lang === 'ar';
  // console.log('data', result);
  const { data } = result;
  return (
    <React.Fragment>
      <Heading textAlign={"center"} mt={10} size="xl" color={theme.colors.primary[600]}>{isRTL ? data.title_ar : data.title_en}</Heading>
      {data && (
        <Grid templateColumns={'repeat(3, 1fr)'} gap={6} my={6}>
          {data.listing &&
            data.listing.map((item: any, index: number) => (
              <GridItem colSpan={{ base: 3, md: 1 }} key={`${item.id}-${index}`}>
                <ProductCard dictionary={dictionary} isRTL={isRTL} item={item} />
              </GridItem>
            ))}
        </Grid>
      )}
    </React.Fragment>
  )
}
