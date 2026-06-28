import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className="custom-container flex flex-wrap items-center justify-between">

        <a rel="home" className="transition-all duration-300 ease-in-out group" href="http://localhost/sandeepkamra/" title="Sandeep Kamra" itemProp="url">
          <span className="flex flex-wrap items-center justify-center flex-col">
            <span className="text-white uppercase font-bold block logo-title">S
              <span className="text-red-500 group-hover:text-white! register">and</span>eep
            </span>
            <span className="surname">Kamra</span>
          </span>
        </a>

        <div className='flex z-50 items-start xl:items-center'>
          <ul className='navbar-nav flex items-center justify-center'>
            <li>
              <a href="#" className='nav-link'>
                <span className="dots"></span>
                Services
              </a>
            </li>
            <li><a href="#" className='nav-link'>
              <span className="dots"></span>
              Portfolios
            </a>
            </li>
            <li><a href="#" className='nav-link'>
              <span className="dots"></span>
              Who I am?
            </a>
            </li>
            <li><a href="#" className='nav-link'>
              <span className="dots"></span>
              A.C.E
            </a>
            </li>
            <li><a href="#" className='nav-link'>
              <span className="dots"></span>
              Expertise
            </a>
            </li>
            <li><a href="#" className='nav-link'>
              <span className="dots"></span>
              Blog
            </a>
            </li>
            <li><a href="#" className='nav-link'>
              <span className="dots"></span>
              Contact Me
            </a>
            </li>
            <li><a href="#" className='nav-link btn-primary'>Download CV</a></li>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header