import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const Banner = () => {
  return (
    <section className="lg:h-screen bg-black py-5 lg:py-0">
      <div className="custom-container h-full grid grid-cols-2 items-center">
        <div className="text-white">
          <h1>Be <span className="text-primary">Involve!</span> </h1>
          <p className="leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsum, consequuntur nemo, eum delectus modi consequatur, quibusdam repudiandae architecto obcaecati explicabo recusandae impedit nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ipsum, consequuntur nemo, eum delectus modi consequatur, quibusdam repudiandae architecto obcaecati explicabo recusandae impedit nesciunt.</p>
          <div className="mt-6 lg:mt-12 flex flex-wrap items-center gap-6">
            <a href="#" className="btn-outline-white">Be Involve!</a>
            <a href="#" className="btn-primary">Explore Portfolios</a>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            effect="fade"
            modules={[EffectFade, Autoplay]}
            autoplay={
              {
                delay:1000,
                disableOnInteraction: false
              }
            }
          >
            <SwiperSlide className="bg-black">
              <img src="/1.png" alt="Banner" className="max-h-[700px] mx-auto block" />
            </SwiperSlide>
            <SwiperSlide className="bg-black">
              <img src="/2.png" alt="Banner" className="max-h-[700px] mx-auto block" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Banner