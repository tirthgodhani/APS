// src/components/NAvbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NAvbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // setIsOpen(false);
        }
    };

    const getActiveClass = (e) => {
        return e.isActive ? 'text-red' : 'text-black';
    };

    return (
        <nav className='sticky top-0 z-10 bg-white'>
            <div className="mx-auto px-2 slide-top">
                <div className="flex justify-between">
                    <div className="flex items-center py-5 px-6">
                        <img
                            className="h-8 w-8"
                            src="https://aps-three-ai.vercel.app/images/apsthreeai.svg"
                            alt="LOGO"
                        />
                        <div className="flex flex-row mt-[2px] font-bold text-lg">
                            <div className="ml-2">APS</div>
                            <div className="mx-[4px]">THREEAI</div>
                        </div>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-black focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="black"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-8 6h7"}
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`hidden lg:flex items-center space-x-1 ${isOpen ? "block" : "hidden"} font-bold lg:flex md:space-x-8`}>
                        <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 hover:text-red-500 transition duration-300`} to="/homepage" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 hover:text-red-500 transition duration-300`} to="/service" onClick={() => setIsOpen(false)}>Services</NavLink>
                        <a className="py-4 px-2 text-black hover:text-red-500 transition duration-300 cursor-pointer" onClick={() => handleLinkClick('technologies')}>Technologies</a>
                        <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 hover:text-red-500 transition duration-300`} to="/erp" onClick={() => setIsOpen(false)}>ERP Product</NavLink>
                        <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 hover:text-red-500 transition duration-300`} to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
                        <a className="py-4 px-2 text-black hover:text-red-500 transition duration-300 cursor-pointer" onClick={() => handleLinkClick('blog')}>Blogs</a>
                        <a className="py-4 px-2 text-black hover:text-red-500 transition duration-300 cursor-pointer" onClick={() => handleLinkClick('contactus')}>Contact Us</a>
                        <a className="py-2 px-4 text-white bg-black rounded-lg hover:bg-green-300 transition duration-300" href="https://myerphome.com/auth/login">Login</a>
                    </div>
                </div>
            </div> 
            <div className={`fixed inset-0 lg:hidden bg-black transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out font-bold flex flex-col text-left text-3xl px-16 mt-16 py-16`}>
                <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 text-white hover:text-red transition duration-300`} to="/homepage" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 text-white hover:text-red transition duration-300`} to="/service" onClick={() => setIsOpen(false)}>Services</NavLink>
                <a className="py-4 px-2 text-white hover:text-red transition duration-300" onClick={() => handleLinkClick('technologies')}>Technologies</a>
                <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 text-white hover:text-red transition duration-300`} to="/erp" onClick={() => setIsOpen(false)}>ERP Product</NavLink>
                <NavLink className={(e) => `${getActiveClass(e)} py-4 px-2 text-white hover:text-red transition duration-300`} to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
                <a className="py-4 px-2 text-white hover:text-red transition duration-300" onClick={() => handleLinkClick('blog')}>Blogs</a>
                <a className="py-4 px-2 text-white hover:text-red transition duration-300" onClick={() => handleLinkClick('contactus')}>Contact Us</a>
                <a className="py-2 px-4 text-white bg-black rounded-lg hover:bg-green-300 transition duration-300" href='https://myerphome.com/auth/login'>Login</a>
            </div>
        </nav>
    );
}

export default NAvbar;
