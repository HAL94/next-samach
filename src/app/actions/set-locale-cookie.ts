import { i18n } from '@/i18n-config';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function setLocaleCookie(locale: string) {
    try {
        const preferredLocale = i18n.locales.find((loc) => loc === locale);
        
        if (!preferredLocale) {
            throw new Error('Invalid Locale')
        }

        cookies().set('_culture', preferredLocale);
        
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error);
        return null;
    }
}