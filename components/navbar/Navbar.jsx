"use client";

import { useState } from "react";
import { MdOutlineLocationOn, MdOutlineMail, MdPhone } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Sunshine from "../../public/sunshine.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='flex flex-col gap-10'>
      <div className='hidden lg:flex justify-around'>
        <p className='flex items-center gap-2'>
          <MdOutlineLocationOn size={30} /> 1719 W 25th St, Yuma Arizona 85364
        </p>
        <ul className='flex gap-4'>
          <li className='flex items-center gap-2'>
            <MdOutlineMail size={20} /> Email us
          </li>
          <li className='flex items-center gap-2'>
            <MdPhone size={20} />
            Call: 928-726-4313
          </li>
        </ul>
      </div>
      <nav className='px-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Image src={Sunshine} width={80} height={80} alt='logo' priority />
            <h1>Sunshine's Daycare</h1>
          </div>
          <button
            onClick={toggleNav}
            className='block cursor-pointer lg:hidden'
          >
            {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
