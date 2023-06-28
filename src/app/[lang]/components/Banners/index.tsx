'use client';

import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { CldImage } from 'next-cloudinary';

interface Props {
  bannerData: any;
  lang: 'en' | 'ar';
}
export default function Banners({ bannerData, lang }: Props) {
  // console.log('bannerData', bannerData);
  const isRTL = lang === 'ar';
  return (
    <Box role="promotions" sx={{ width: '100%', height: 'fit-content' }}>
      {bannerData && (
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          dir={isRTL ? 'rtl' : 'ltr'}
          pagination={{ clickable: true }}
          style={{ height: '100%', width: '100%' }}
        >
          {bannerData.data.map((slide: any) => (
            <SwiperSlide
              key={slide.id}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                position="relative"
                width="100%"
                height="100%"
                display={'flex'}
                justifyContent="center"
                alignItems={'center'}
              >
                <CldImage
                  src={isRTL ? slide['banner_img_ar'] : slide['banner_img_en']}
                  width="1432"
                  height="538"
                  sizes="100vw"
                  alt="Fish"
                  style={{ borderRadius: '13px' }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
