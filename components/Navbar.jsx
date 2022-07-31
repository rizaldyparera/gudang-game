import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from "/public/assets/thomas_slebew.jpg";

function Navbar () {
    const [ isOpen, setIsOpen ] = useState(false);
    return(
        <div className="xl:px-[90px] fixed w-full z-50">
            <div className="bg-background-hover lg:bg-transparent">     
                <div className="flex pt-[20px] flex-col lg:flex-row">
                    <div className="flex px-4 md:px-11 xl:px-0 pb-[20px] lg:pb-0 items-center">
                        <div className="w-full">    
                            <h1 className="font-montserrat text-primary-color font-bold xl:text-2xl">Gudang<span className="font-montserrat text-secondary-color font-bold xl:text-2xl">Game</span></h1>
                        </div>
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-color focus:outline-none block lg:hidden">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path className={!isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path className={isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                    </div>
                        <div className={`${ isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row  w-full items-center`}>
                            <div className="flex flex-col lg:flex-row justify-center lg:w-full  xl:w-10/12 pb-4 lg:pb-0">
                                <Link href="#">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-hover-color font-montserrat font-medium xl:text-lg py-1 lg:py-0 px-4 md:px-11 lg:px-4">Home</a>
                                </Link>
                                <Link href="#catalog">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-hover-color font-montserrat font-medium xl:text-lg py-1 lg:py-0 px-4 md:px-11 lg:px-4 lg:pl-[30px]">Games</a>
                                </Link>
                                <Link href="#market">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-hover-color font-montserrat font-medium xl:text-lg py-1 lg:py-0 px-4 md:px-11 lg:px-4 lg:pl-[30px]">Markets</a>
                                </Link>
                                <Link href="#news">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-hover-color font-montserrat font-medium xl:text-lg py-1 lg:py-0 px-4 md:px-11 lg:px-4 lg:pl-[30px]">News</a>
                                </Link>
                                <Link href="#contact">
                                    <a className="block text-primary-color active:text-secondary-color hover:text-hover-color font-montserrat font-medium xl:text-lg py-1 lg:py-0 px-4 md:px-11 lg:px-4 lg:pl-[30px]">Contact Us</a>
                                </Link>
                            </div>
                        <div className="flex items-center px-4 md:px-11 lg:px-0">
                            <Image src={ Profile } width="48px" height="48px" className="rounded-full"></Image>
                            <p className="text-primary-color font-semibold font-montserrat text-base pl-[10px]">Thomas Slebew</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;