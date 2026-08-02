import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

const Demo = () => {
  return (
    <section className='lg:h-screen bg-secondary py-5 lg:py-0'>
      <div className="custom-container text-center flex flex-col flex-wrap items-center justify-center h-full text-center">
        <h2 className='heading'>
          <span className="text-primary">These </span>
          I can do
        </h2>
        <p className='leading-8 mb-12 text-white'>Services through I can do both design and development, are:</p>

        <div className="grid grid-cols-4 gap-4 text-white">
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          {/* <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i class="fa-regular fa-laptop-mobile fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Responsive Design</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>WordPress Developement</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Woocommerce Development</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web App Development</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Hybrid App Development</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Speed Optimization</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div>
          <div className="service-card text-base bg-dark-gray/20 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Email Template</h3>
            <p className='leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore veniam nihil nobis optio laborum?</p>
          </div> */}
        </div>
       <div className="mt-6 lg:mt-12 flex flex-wrap items-center gap-6">
            <a href="#" className="btn-outline-white">Need a website?</a>
            <a href="#" className="btn-primary">I'm certified in</a>
          </div>
      </div>
    </section>
  )
}

export default Demo