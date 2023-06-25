
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Counter from './components/Counter'
import LocaleSwitcher from './components/LocaleSwitcher'
import { supabase } from '@/supabase-client'
import Banners from './components/Banners'


export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const slides = await supabase.from('banner-slides').select('*')
  return (
    <main>
      <Banners bannerData={slides} />
      <p>Current locale: {lang}</p>
      <LocaleSwitcher />
      <p>
        This text is rendered on the server:{' '}
        {dictionary['server-component'].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </main>
  )
}
