
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Counter from './components/Counter'
import LocaleSwitcher from './components/LocaleSwitcher'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  return (
    <main>
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
