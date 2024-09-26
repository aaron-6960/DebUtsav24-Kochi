"use client";
import logo from '@/assets/debutsav.svg';
import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { NavItems } from '@/constants';
import Link from 'next/link';

const Navbar = () => {
  const [mobilenav, setmobilenav] = useState(false);

  return (
    <div
      className='w-screen flex flex-row items-center justify-between px-6 lg:px-0 lg:justify-around py-3 fixed top-0 z-10 bg-zinc-900'
    >
      <a href='/'>
        <Image  src={logo} alt="true" className="h-[50px] -mr-[30px]" />
      </a>
      <button
        onClick={() => setmobilenav(!mobilenav)}
        className="text-4xl block lg:hidden mr-3"
      >
        {!mobilenav ? (
          <RxHamburgerMenu className="text-[40px] text-gray-light"/>
        ) :           
          <IoCloseOutline className="text-[40px] text-gray-light"/>}
      </button>
      <div
        className={`text-gray-light transition-all duration-300 ease-in-out font-medium lg:static lg:w-max lg:h-max lg:pt-0 lg:bg-transparent lg:block lg:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center items-center ${
          mobilenav
            ? "right-0 flex flex-col gap-8 bg-zinc-900"
            : "right-full flex flex-col gap-8 text-opacity-0  "
        }`}
      >
        {NavItems.map((item,index) => (
          <Link
            key={index}  
            href={item.link}
            className="group text-gray-light transition-all duration-300 ease-in-out lg:ml-8"
            onClick={() => setmobilenav(!mobilenav)}
          >
            <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
              {item.title}
            </span>
          </Link>
        ))}
        <button className="lg:hidden block register text-xl text-gray-light bg-red px-10 py-2">
          <a href="https://app.formbricks.com/s/cm1ggwfvp000r123pzj996nkj">Register</a>
        </button>
      </div>
      <button className="lg:block hidden register text-xl text-gray-light bg-red px-10 py-2">
        <a href="https://app.formbricks.com/s/cm1ggwfvp000r123pzj996nkj">Register</a>
      </button>
    </div>
  );
};

export default Navbar;