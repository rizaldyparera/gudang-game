import Image from "next/image";
import Bghero from '/public/assets/hero.png';

function Hero () {
    return (
        <>
            <div className="flex w-full xl:px-[90px] xl:block justify-center pt-48" data-aos="zoom-in-up">
                <div className="flex flex-col xl:flex-row items-center">
                    <div className="flex-col w-full">
                        <h1 className="text-primary-color font-montserrat font-bold text-2xl text-center xl:text-4xl xl:text-left mb-3">Let The
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 mx-2 before:bg-secondary-color relative inline-block">
                            <span className="relative text-white">Games</span>    
                        </span>Begin</h1>
                        <p className="text-primary-color font-montserrat font-medium text-base text-center xl:text-lg xl:text-left">find an easy and fun gaming experience</p>
                        <div className="items-center relative mx-auto xl:mx-0 justify-center text-center mt-5 w-10/12 xl:w-7/12">
                            <i class='bx bx-search-alt text-background-color absolute top-3 left-2 text-lg'></i>
                            <input className="font-montserrat w-full text-sm px-8 h-12 rounded-full text-background-color placeholder:text-background-color
                              focus:outline-none focus:border-hover-color focus:ring-2 focus:ring-hover-color" type="text" placeholder="find your games or items" />
                            <button className="absolute text-sm top-0 rounded-r-full px-4 right-0 z-20 border-none h-12 cursor-pointer text-white bg-secondary-color hover:bg-hover-color font-montserrat">Search</button>                       
                        </div>
                    </div>
                    <div className="w-10/12 sm:w-9/12 xl:w-full mx-auto mt-5">
                        <Image src={ Bghero }></Image>
                    </div>
                </div>
            </div>
            <div className="flex pt-20 sm:pt-12 xl:px-[90px] px-4 md:px-11">
                <div className="px-2 xl:pl-0">             
                    <h1 className="text-secondary-color font-montserrat font-bold text-xl text-center">100K</h1>
                    <p className="text-primary-color font-montserrat font-bold text-xl">Users</p>
                </div>
                <div className="px-4">             
                    <h1 className="text-secondary-color font-montserrat font-bold text-xl mx-auto text-center">50</h1>
                    <p className="text-primary-color font-montserrat font-bold text-xl">Countries</p>
                </div>
                <div className="px-4">             
                    <h1 className="text-secondary-color font-montserrat font-bold text-xl mx-auto text-center">100</h1>
                    <p className="text-primary-color font-montserrat font-bold text-xl">Awards</p>
                </div>
            </div>
        </>
    )
}
export default Hero;