import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useGetLocaleDir() {
    const [isRTL, setIsRTL] = useState<boolean>(false);
    const pathname = usePathname()

    useEffect(() => {
        setIsRTL(pathname.includes('ar'))
    }, [pathname, setIsRTL])
    
    return isRTL;
}