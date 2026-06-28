import React from 'react'

const Footer = () => {
  return (
    <footer className='wrapper pt-12 xl:py-12 bg-black left-0 right-0 bottom-0 absolute text-center text-white'>
      <div className='px-6 2xl:py-12'>
        <div class="animated-heart">
          <input id="toggle-heart" type="checkbox" />
          <label for="toggle-heart" aria-label="like">❤</label>
        </div>
        
        <p className="mb-0">Proudly made by</p>

        <div className='max-w-full w-max mx-auto'>
          <a rel="home" className="navbar-brand transition-all duration-300 ease-in-out group py-5 block" href="http://localhost/sandeepkamra/" title="Sandeep Kamra" itemProp="url">
            <span className="flex flex-wrap items-center justify-center flex-col">
              <span className="text-white uppercase font-bold block logo-title">S
                <span className="text-red-500 group-hover:text-white! register">and</span>eep
              </span>
              <span className="surname">Kamra</span>
            </span>
          </a>
        </div>
        
        <p className="mb-0">in Tailwindcss 4 &amp; React JS.</p>
        <p className="text-white mb-6 xl:mb-0">© Copyright 2026. All Rights Reserved.</p>

        <div className="pt-6 lg:pt-12 connect">
          <div className="custom-container">
            
            <form>
              <div className="flex flex-col flex-wrap justify-center items-center">
                
                <div className="mb-3">To connect with ME, Subscribe please:</div>

                <div className='flex flex-wrap items-center gap-6'>
                  <div className="mb-2 sm:mb-0">
                    <label htmlFor="EMAIL" className="block sm:inline-block">
                      <input type="email" name="EMAIL" placeholder="Email Address" required="" className='input-field' />
                    </label>
                  </div>
                  <div className="">
                    <input type="submit" value="Connect!" className="btn-primary" />
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer