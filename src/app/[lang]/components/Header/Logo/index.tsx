import { Box } from "@chakra-ui/react";
import Image from "next/image";
import LogoEn from '../../../../../../public/logo_5.png';

export default function AppLogo() {
    return (
        <Box role='logo' sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 150, aspectRatio: '16 / 7', width: { base: 90, sm: 120, md: 150 }
        }} position='relative'>
            <Image alt='Samach Logo' fill src={LogoEn} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw' />
        </Box>
    )
}