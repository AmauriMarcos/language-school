'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsClock as ClockIcon } from 'react-icons/bs';
import { AiOutlinePhone as PhoneIcon } from 'react-icons/ai';
import { IoLocationOutline as LocationIcon } from 'react-icons/io5';
import { FaInstagram as InstaIcon } from 'react-icons/fa';
import { Sidebar } from '../Sidebar';
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaYoutube as YoutubeIcon } from "react-icons/fa6";
import { FaFacebookF as FaceIcon} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll position threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const infoNav = [
    { id: 1, icon: <ClockIcon size={34} color="#FF3A3A" />, title: 'Hours', text: 'Mon-Fri 8AM - 5PM' },
    { id: 2, icon: <PhoneIcon size={34} color="#FF3A3A" />, title: 'Call', text: '+2342 554 34' },
    {
      id: 3,
      icon: <LocationIcon size={34} color="#FF3A3A" />,
      title: 'Address',
      text: 'Greenpoint, Brooklyn',
    },
  ];

  return (
    <div className="flex flex-col">
      <div
        className={`px-6 w-full flex justify-between items-center border-b border-solid border-[#e7e7e7] pb-2 md:pb-6 ${isScrolled ? 'fixed top-0 left-0 bg-white z-50 md:relative pt-2' : ''
          }`}
      >
        <div className="w-[130px] md:w-[200px] h-auto">
          <Image className="" src="/assets/dalia_karla.png" width={170} height={170} alt="logo" />
        </div>
        <div className="block md:hidden">
          <Sidebar />
        </div>

        <div className="hidden md:flex items-center gap-12">
          {infoNav.map(({ id, icon, title, text }) => {
            return (
              <div key={id} className="flex gap-2 items-center ">
                {icon}
                <div className="flex flex-col">
                  <h6 className="text-[.75rem] uppercase font-bold text-[#FF3A3A]">{title}</h6>
                  <p className="text-[.8rem] font-[300]">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {isScrolled && (
        <div className={`block md:hidden ${isScrolled ? 'h-[60px]' : ''}`}></div>
      )}


      <div
        className={`hidden md:flex w-full justify-between pt-4 items-center mb-2  ${isScrolled ? 'md:fixed md:top-0 md:left-0 md:bg-white md:z-50 md:pt-4 md:shadow-md md:mb-0 px-0  sm:px-[24px]  2xl:px-[208px] py-[8px] ' : ''
          }`}
      >
        <ul className="flex gap-10">
          <li className="text-[.85rem] uppercase font-[400] text-[#242424]">
            <a className="hover:text-[#FF3A3A]" href="#">
              Home
            </a>
          </li>
          <li className="text-[.85rem] uppercase font-[400] text-[#242424]">
            <a className="hover:text-[#FF3A3A]" href="#">
              About
            </a>
          </li>
          <li className="text-[.85rem] uppercase font-[400] text-[#242424]">
            <a className="hover:text-[#FF3A3A]" href="#">
              Contact
            </a>
          </li>
          <li className="text-[.85rem] uppercase font-[400] text-[#242424]">
            <a className="hover:text-[#FF3A3A]" href="#">
              Pricing
            </a>
          </li>
          <li className="text-[.85rem] uppercase font-[400] text-[#242424]">
            <a className="hover:text-[#FF3A3A]" href="#">
              Courses
            </a>
          </li>
        </ul>
        <div className='flex items-center gap-2'>
          <TwitterIcon color="#242424" size={16} />
          <FaceIcon color="#242424" size={16} />
          <YoutubeIcon color="#242424" size={16} />
          <InstaIcon color="#242424" size={18} />
        </div>

      </div>

      {isScrolled && (
        <div className={`hidden md:block ${isScrolled ? 'h-[60px]' : ''}`}></div>
      )}
    </div>
  );
};

export default Navbar;
