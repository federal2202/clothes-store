"use client";

import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

export default function Navbar(){
    return (
        <header className='z-20 sticky top-0 flex items-center w-full py-4 px-4 md:px-16 lg:px-28 font-semibold text-[14px] lg:text-[16px] border-b-[1px] border-gray-400/30 font-geist backdrop-blur-sm bg-black/30'>
            <nav className='flex justify-between items-center w-full relative'>
                <div className='justify-start items-center gap-6 md:gap-8 lg:gap-10 tracking-wide font-semibold text-[14px] hidden sm:flex '> 
                    <Link href="/" className='text-[#fafafa99] relative hover:text-white transition duration-300 '>Pricing <span className='absolute top-0 right-0 w-[1px] h-[1px] font-normal'><GoArrowUpRight /></span></Link>
                    <Link href="/" className='text-[#fafafa99] relative hover:text-white transition duration-300 hidden sm:block'>Shipping <span className='absolute top-0 right-0 w-[1px] h-[1px] font-normal'><GoArrowUpRight /></span></Link>
                    <Link href="/about-us" className='text-[#fafafa99] relative hover:text-white transition duration-300 hidden sm:block'>About Us <span className='absolute top-0 right-0 w-[1px] h-[1px] font-normal'><GoArrowUpRight /></span></Link>
                </div>
                <Link href="/" className='block text-white text-lg drop-shadow-[0_0_1px_rgba(255,255,255,0.6)] sm:absolute sm:left-[47%]'>FNclothes</Link>
                <div className='flex justify-end items-center gap-4 md:gap-8 lg:gap-10'>
                    <Link href="/order" >
                        <button className='py-2 px-4 bg-white/90 rounded-lg border-white border-[1px] hover:bg-transparent  text-black hover:text-white transition duration-200 font-semibold text-base backdrop-blur-md '>
                            Order
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}