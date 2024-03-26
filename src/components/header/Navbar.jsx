import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../../assets/logo.png'
import { Button } from '@/components/ui/button';
import NavigationMenuDemo from './headerComponents/NavigationMenu';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link className='/'>
                            <img src={logo} height={100} width={100} className='p-5' />
                        </Link>
                    </div>
                    <div className="hidden sm:block ">
                        {/* <div className="flex space-x-4 justify-center items-center">
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div> */}
                        <NavigationMenuDemo />


                    </div>
                    {/* <div className='hidden sm:block p-5'>
                        <div className='flex items-center gap-5'>
                            <span className='text-white '>Sign In</span>
                            <Button className='text-primary bg-background hover:bg-input '>Post a Job </Button>
                        </div>
                    </div> */}
                    <div className="flex sm:hidden ">
                        <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">  <NavLink to="/" >
                     Home
                    </NavLink></a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            <NavLink to="/about" >
                            About
                    </NavLink>
                                </a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            <NavLink to="/blogs" >
                            Blogs
                    </NavLink>
                                </a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                <NavLink to="/">
                                Services
                                </NavLink>
                                </a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><NavLink to="/contact">Contact</NavLink></a>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
};

export default Navbar;
