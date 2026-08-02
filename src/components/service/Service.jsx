import React from 'react'

const Service = () => {
  return (
    <section className="lg:h-screen bg-secondary py-5 lg:py-0">
      <div className="custom-container text-center flex flex-col items-center justify-center h-full">
        <h2 className='heading'>
          <span className="text-primary">These </span>
          I can do
        </h2>
        <p className='leading-8 mb-12 text-white'>Services through I can do both design and development, are:</p>
        <div className="grid grid-cols-4 gap-4 text-white">
          <div className="service-card">
            <i className="fa-brands fa-bootstrap fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fad fa-phone-laptop fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fab fa-wordpress fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fad fa-people-carry fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fad fa-mobile-android-alt fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fad fa-mobile-android-alt fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fad fa-tachometer-alt-slowest fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
          <div className="service-card">
            <i className="fad fa-envelope-open-text fa-2x lh-1"></i>
            <h3 className='font-semibold mt-5 mb-3 uppercase'>Web Design</h3>
            <p className='leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis sint, velit eligendi praesentium soluta.</p>
          </div>
        </div>
         <div className="mt-6 lg:mt-12 flex flex-wrap items-center gap-6">
            <a href="#" className="btn-outline-white">Need a website?</a>
            <a href="#" className="btn-primary">I'm certified in</a>
          </div>
      </div>
    </section>
  )
}

export default Service