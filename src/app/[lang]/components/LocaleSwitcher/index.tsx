'use client';
import { i18n } from '@/i18n-config';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const router = useRouter();
    const redirectedPathName = async (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        const response = await fetch('/api/set-locale', {
            method: 'POST',
            headers: {
                'accept-content': 'application/json'
            },
            body: JSON.stringify({
                locale
            })
        })
        const result = await response.json();
        console.log('result', result);
        // return segments.join('/')
        router.push(segments.join('/'));
    }

    return (
        <div>
            <p>Locale switcher:</p>
            <ul>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale} onClick={() => redirectedPathName(locale)}>
                            {locale}
                            {/* <Link href={redirectedPathName(locale)}>{locale}</Link> */}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
