import { usePathname, useRouter } from "next/navigation"


export default function useLocaleSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const redirectedPathName = async (locale: string) => {
        if (!pathname) return '/'
        const segments = pathname.split('/')
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
        router.refresh();
    }

    return {
        redirectedPathName
    }
}