import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useGetLocaleDir() {
  const [isRTL, setIsRTL] = useState<boolean>(false);
  const params = useParams();
  const lang = params?.lang;

  useEffect(() => {
    setIsRTL(lang === 'ar');
  }, [lang]);

  return isRTL;
}
