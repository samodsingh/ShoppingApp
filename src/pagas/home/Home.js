import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <>
      <Swiper
         loop={true}
         autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}    
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide  className='swiper-slide'>
          <h1>samod kumar singh</h1>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>      
      </Swiper>
    </>
  );
}
