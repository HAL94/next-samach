import { useParams, usePathname, useRouter } from "next/navigation"
import { Router } from "next/router"
import { useState } from "react"



export default function useLocaleSwitcher() {
    const pathname = usePathname()
    const params = useParams()
    const router = useRouter()    
    const [langLoading, setLangLoading] = useState(false)    

    const redirectedPathName = async (locale: string) => {
        if (!pathname || !params?.lang) return '/'
        if (params?.lang === locale) return
        setLangLoading(true)
        // Router.events.on('routeChangeStart', () => {
        // })

        Router.events.off('routeChangeComplete', () => {
            console.log('routeChangeCompleted')
            setLangLoading(false)
        })
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
        await response.json();
        // console.log('result', result);
        // return segments.join('/')
        router.push(segments.join('/'));
        router.refresh();
    }

    return {
        redirectedPathName,
        langLoading
    }
}