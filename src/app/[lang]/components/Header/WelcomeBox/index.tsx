'use client';

import { useDictContext } from '@/app/[lang]/providers/dictionary';
import theme from '@/theme';
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md';

export default function WelcomeBox() {
    const { dictionary } = useDictContext();
    return (
        <Box
            aria-label="Welcome Box"
            position="relative"
            gap={2}
            display="flex"
            cursor={'pointer'}
        >
            <Box
                bg={theme.colors.secondary['500']}
                px={'8px'}
                pt={'9px'}
                pb={'7px'}
                borderRadius='0.375rem'>
                <MdOutlineAccountCircle size={24} color='white'/>
            </Box>

            <Box
                display={'flex'}
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'flex-start'}
            >
                <Text color='black' fontSize={'12px'}>{dictionary.header.welcome}</Text>
                <Heading color='black' size={'xs'}>{dictionary.header.guest}</Heading>
            </Box>
        </Box>
    )
}
