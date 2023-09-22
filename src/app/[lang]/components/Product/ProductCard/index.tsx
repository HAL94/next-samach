'use client';

import { theme } from '@/theme';
import { Box, Button, Card, CardBody, Heading, Text } from '@chakra-ui/react';
import { CldImage } from 'next-cloudinary';

interface Props {
  item: any;
  isRTL: boolean;
  dictionary: any;
}

export default function ProductCard({ item, isRTL, dictionary }: Props) {
  return (
    <Card width="100%" height="100%" position="relative" _hover={{
      border: 1,
      borderColor: theme.colors.tertiary['500'],
      borderStyle: 'solid'
    }}>
      <CardBody>
        <Box
          display="flex"
          justifyContent={'space-between'}
          alignItems="center"
          width="full"
        >
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems={'center'}
            gap={1}
          >
            <Heading size="sm" color={theme.colors.ferra[500]}>
              {isRTL ? item.title_ar : item.title_en}
            </Heading>

            {item.is_discounted && <Text
              size="md"
              color={theme.colors.neptune[500]}
              textDecorationLine={'line-through'}
              alignSelf="start"
            >
              {item.price} {dictionary.sar}
            </Text>}
            <Text
              size="md"
              color={theme.colors.secondary[500]}
              alignSelf="start"
            >
              {item.selling_price} {dictionary.sar}
            </Text>
            <Button variant="outline" type="button" mt={8} alignSelf={'flex-start'}>
              {dictionary.product.add}
            </Button>
          </Box>
          <CldImage
            src={item.thumbnail}
            alt={isRTL ? item.title_ar : item.title_en}
            width="150"
            height="150"
            sizes="100vw"
            style={{ borderRadius: '13px' }}
          />
        </Box>
      </CardBody>
    </Card>
  );
}
