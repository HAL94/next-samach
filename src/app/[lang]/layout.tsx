import './globals.css';
import { Cairo } from 'next/font/google';
import { Providers } from './providers';
import Header from './components/Header';
import { getLocaleCookie } from '../actions/get-locale-cookie';
import { getDictionary } from '@/get-dictionary';
import DictProvider from './providers/dictionary';
import ClientOnly from './components/ClientOnly';


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
      <body
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{ paddingBottom: 20, overflowX: 'hidden' }}
      >
        <Providers locale={locale ? locale : 'ar'}>
          <ClientOnly>
            <DictProvider dictionary={dictionary}>
              <Header />
              <main style={{ paddingInline: 60 }}>
                {children}
              </main>
            </DictProvider>
          </ClientOnly>
        </Providers>
      </body>
    </html>
  );
}
