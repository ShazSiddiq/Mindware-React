import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
const FooterMiddle = () => {
  return (
    <footer className="">
    <div className="mx-auto py-10">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className='px-5'>
          <div className="flex justify-center items-center sm:justify-start">
          <p className="text-lg font-bold ">Disclamer</p>
          </div>
          <div className="flex-shrink-0">
                        <Link className='/'>
                            <img src={logo} height={150} width={150} className='p-5' />
                        </Link>
                    </div>
          <p className=" mx-auto mt-6 leading-relaxed font-bold  sm:max-w-xs sm:mx-0 sm:text-left">
          GULSHAN MARWAH
          </p>
          <p className=" mx-auto mt-6 leading-relaxed   sm:max-w-xs sm:mx-0 sm:text-left">
          Radio-Frequency IDentification Consultant & Cyber Expert Gulshan Marwah
          </p>
         
        </div>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold ">About Us</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Company History
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Employee Handbook
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold ">Our Services</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Google Ads
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold ">Helpful Links</p>
            <nav className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className=" transition hover:/75"
                    href="/"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        
        </div>
      </div>
     
    </div>
  </footer>
  )
}

export default FooterMiddle