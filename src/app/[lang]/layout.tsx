import './globals.css'
import { Cairo } from 'next/font/google'
import { Providers } from './providers'
import Header from './components/Header'
import { getLocaleCookie } from '../actions/get-locale-cookie'
import { getDictionary } from '@/get-dictionary'
import { supabase } from '@/supabase-client'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Samach',
  description: 'Get your fishes right',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocaleCookie();
  const isRTL = locale === 'ar';
  const dictionary = await getDictionary(isRTL ? 'ar' : 'en');
  const slides = await supabase.from("banner-slides").select("*")
  // console.log('got data banners', slides)
  return (
    <html className={cairo.className}>
      <body dir={isRTL ? 'rtl' : 'ltr'}>
        <Providers locale={locale ? locale : 'ar'}>
          <Header dictionary={dictionary} slides={slides} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
