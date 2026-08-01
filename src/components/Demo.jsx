import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

const Demo = () => {
  return (
    <section className='lg:h-screen bg-black py-5 lg:py-0'>
      <div className="custom-container grid grid-cols-2 flex-wrap items-center h-full">
        <div className='text-white'>
          <h1>Be <span className="text-primary">Involve</span></h1>
          <div className=' flex flex-col gap-4'>
            <p className='leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.</p>
            <p className='leading-8'> It took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className='mt-6 lg:mt-12 flex flex-wrap items-center gap-6'>
            <a href="#" className='btn-outline-white'>be involve!</a>
            <a href="#" className='btn-primary'>Explore Portfolios</a>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            effect={'fade'}
            loop={true}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className='bg-black'>
              <img src="/1.png" alt="banner" className='max-h-[700px] mx-auto block' />
            </SwiperSlide>
            <SwiperSlide className='bg-black'>
              <img src="/2.png" alt="banner" className='max-h-[700px] mx-auto block' />
            </SwiperSlide>
            <SwiperSlide className='bg-black'>
              <img src="/1.png" alt="banner" className='max-h-[700px] mx-auto block' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Demo