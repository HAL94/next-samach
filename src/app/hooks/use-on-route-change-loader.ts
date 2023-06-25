import { Router } from "next/router";
import { useEffect, useState } from "react";

export default function useOnRouteChangeLoader() {
    const [routeLoading, setRouteLoading] = useState(false)
    const onRouteLoadingHandlers = () => {
        Router.events.on('routeChangeStart', () => {
            console.log('route started changing')
            setRouteLoading(true)
        })

        Router.events.off('routeChangeComplete', () => {
            console.log('route changing complete')
            setRouteLoading(false)
        })
    }
    useEffect(() => {
        onRouteLoadingHandlers()
    }, [])
    return { routeLoading }
}