import { getAllBanners, getBestSellers, getOffers } from '../actions/home-page';
import Banners from './components/Banners';
import BestSellers from './components/BestSellers';
import Categories from './components/Categories';
import ClientOnly from './components/ClientOnly';
import Offers from './components/Offers';
import PageHoc from './hoc/page-hoc';

interface Props {
  slides: any;
  lang: 'en' | 'ar';
  dictionary: any;
  bestSellers: any;
  offers: any;
}

const Home = ({ slides, lang, bestSellers, offers, dictionary }: Props) => {
  // console.log('offers', offers)
  return (
    <ClientOnly>
      <Banners lang={lang} bannerData={slides} />
      <Categories dictionary={dictionary.categories} />
      <BestSellers lang={lang} result={bestSellers} dictionary={dictionary} />
      <Offers lang={lang} result={offers} dictionary={dictionary} />
    </ClientOnly>
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
  {
    key: 'offers',
    callback: async () => await getOffers(),
  },
]);
