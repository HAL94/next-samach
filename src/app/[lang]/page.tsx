import { getAllBanners, getBestSellers } from '../actions/home-page';
import Banners from './components/Banners';
import BestSellers from './components/BestSellers';
import Categories from './components/Categories';
import PageHoc from './hoc/page-hoc';

interface Props {
  slides: any;
  lang: 'en' | 'ar';
  dictionary: any;
  bestSellers: any
}

const Home = ({ slides, lang, bestSellers, dictionary }: Props) => {
  return (
    <main>
      <Banners lang={lang} bannerData={slides} />
      <Categories dictionary={dictionary.categories} />
      <BestSellers lang={lang} result={bestSellers} dictionary={dictionary} />
    </main>
  );
};

export default PageHoc(Home, [
  {
    key: 'slides',
    callback: async () => await getAllBanners(),
  },
  {
    key: 'bestSellers',
    callback: async () => await getBestSellers(),
  },
]);
