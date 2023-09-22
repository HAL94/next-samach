'use client';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl'
import theme from '@/theme';

const options = {
    'rtl': { key: 'css-ar', stylisPlugins: [rtl] },
    'ltr': { key: 'css-en' },
}
export function Providers({
    children,
    locale,
}: {
    children: React.ReactNode,
    locale: string;
}) {
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const cache = createCache(options[dir as ('ltr' | 'rtl')]);
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {/* eslint react/no-children-prop: off */}
                <EmotionCacheProvider value={cache} children={children} />
            </ChakraProvider>
        </CacheProvider>
    )
}