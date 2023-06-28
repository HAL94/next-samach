import { getAllBanners } from '../actions/get-all-banners';
import Banners from './components/Banners';
import Categories from './components/Categories';
import PageHoc from './hoc/page-hoc';

interface Props {
  slides: any;
  lang: 'en' | 'ar';
  dictionary: any;
}

const Home = ({ slides, lang, dictionary }: Props) => {
  return (
    <main>
      <Banners lang={lang} bannerData={slides} />
      {/* <Counter dictionary={dictionary.counter} /> */}
      <Categories dictionary={dictionary.categories} />
    </main>
  );
};

export default PageHoc(Home, [
  {
    key: 'slides',
    callback: async () => await getAllBanners(),
  },
]);
