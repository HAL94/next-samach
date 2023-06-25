'use client'

import { Box } from "@chakra-ui/react"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

interface Props {
    bannerData: any
}
export default function Banners({ bannerData }: Props) {
    return (
        <Box role='promotions' sx={{ mt: 7, px: 10 }}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                // dir={isRTL ? 'rtl' : 'ltr'}
                onSlideChange={() => console.log('slide change')}
                pagination={{ clickable: true }}
                style={{ height: '350px', width: '100%' }}>
                {bannerData.data.map((slide: any) => <SwiperSlide key={slide.id} style={{ height: '100%', width: '100%', position: 'relative' }}>
                    <Image src={slide.banner_img} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw' alt="Samach Banner" style={{ objectFit: 'contain' }} />
                </SwiperSlide>)}
            </Swiper>
        </Box>
    )
}   