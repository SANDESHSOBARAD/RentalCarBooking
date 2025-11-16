import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
    const linkSections = [
        {
            title: "QUICK LINKS",
            links: ["Home", "Browse Cars", "List your Car", "About Us"]
        },
        {
            title: "RESOURCES",
            links: ["Help Center", "Terms of Service", "Privacy Policy", "Insurance"]
        },
        {
            title: "CONTACT",
            links: ["13787 E 24th Ave", "San Francisco, CA", "+1 555-333-9999", "rentalcar@gmail.com"]
        }
    ];
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="logo" />
                    <p className="max-w-[410px] mt-6">Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>

                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                            <img src={assets.facebook_logo} alt="facebook" className='w-5 h-5'/>
                        </a>
                        <a href="#">
                            <img src={assets.instagram_logo} alt="facebook" className='w-5 h-5'/>
                        </a>
                        <a href="#">
                            <img src={assets.twitter_logo} alt="facebook" className='w-5 h-5'/>
                        </a>
                        <a href="#">
                            <img src={assets.gmail_logo} alt="facebook" className='w-5 h-5'/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border-t py-4 flex justify-between items-center text-gray-500/80'>
                    <p className="text-sm md:text-base">
                © 2025 CarRental. All rights reserved
            </p>
                <div className='flex space-x-6 text-sm md:text-base text-gray-600'>
                    <p className='cursor-pointer hover:text-gray-800'>
                        Terms
                    </p>
                    <p>|</p>
                    <p className='cursor-pointer hover:text-gray-800'>
                        Privacy
                    </p>
                    <p>|</p>
                    <p className='cursor-pointer hover:text-gray-800'>
                        Cookies
                    </p>
                </div>
            </div>
            
            
        </div>
  )
}

export default Footer