import './globals.css';
import { Cairo } from 'next/font/google';
import { Providers } from './providers';
import Header from './components/Header';
import { getLocaleCookie } from '../actions/get-locale-cookie';
import { getDictionary } from '@/get-dictionary';


const cairo = Cairo({ subsets: ['latin'] });

export const metadata = {
  title: 'Samach',
  description: 'Get your fishes right',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocaleCookie();
  const isRTL = locale === 'ar';
  const dictionary = await getDictionary(isRTL ? 'ar' : 'en');  
  return (
    <html className={cairo.className}>
      <body dir={isRTL ? 'rtl' : 'ltr'} style={{ paddingBottom: 20 }}>
        <Providers locale={locale ? locale : 'ar'}>
          <Header dictionary={dictionary} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
