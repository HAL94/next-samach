import { usePathname, useRouter } from "next/navigation"
import { Router } from "next/router"
import { useEffect, useState } from "react"
// import useOnRouteChangeLoader from "./use-on-route-change-loader"


export default function useLocaleSwitcher() {
    const pathname = usePathname()
    const router = useRouter()
    // const { langLoading } = useOnRouteChangeLoader()
    const [langLoading, setLangLoading] = useState(false)
    // useEffect(() => {
    //     Router.events.on('routeChangeStart', () => {
    //         setLangLoading(true)
    //     })

    //     Router.events.off('routeChangeComplete', () => {
    //         setLangLoading(false)
    //     })
    // }, [])

    const redirectedPathName = async (locale: string) => {
        if (!pathname) return '/'
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
        const result = await response.json();
        console.log('result', result);
        // return segments.join('/')
        router.push(segments.join('/'));
        router.refresh();
    }

    return {
        redirectedPathName,
        langLoading
    }
}