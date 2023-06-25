'use client'

import { Box, Spinner } from "@chakra-ui/react"

export default function AppLoadingOverlay() {
    return (
        <Box display='flex' justifyContent={'center'} alignItems={'center'} sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.24)', zIndex: 100 }}>
            <Spinner color={'#fff'} size={'xl'} />
        </Box>
    )
}