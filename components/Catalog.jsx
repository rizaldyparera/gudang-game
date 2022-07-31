import React from "react";


function Catalog () {

   
    return(
        <>
            <div id="catalog" className="pt-32" data-aos="zoom-in-up">
                <div className="flex">
                    <div className="flex mx-auto flex-col w-full">
                        <h1 className="font-bold font-montserrat text-2xl text-center text-primary-color">Catalog</h1>
                        <p className="font-medium font-roboto text-sm text-center text-primary-color">discover exciting and fun games from various genres</p>
                        <div className="items-center flex-row flex relative mx-auto justify-center text-center mt-5 w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-7">
                            <i class='bx bx-search-alt text-background-color absolute top-2 left-2 text-lg'></i>
                            <input className="font-montserrat w-full text-sm px-8 h-10 rounded-lg text-background-color placeholder:text-background-color
                              focus:outline-none focus:border-hover-color focus:ring-2 focus:ring-hover-color" type="text" placeholder="find your favorit game" />
                            <button className="text-sm ml-[10px] rounded-lg px-4 h-8 cursor-pointer text-white bg-secondary-color hover:bg-hover-color font-montserrat">Search</button>                       
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <a className="text-primary-color text-xs md:text-lg px-2 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3 font-roboto">All Games</a>
                    <a className="text-primary-color text-xs md:text-lg px-2 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3 font-roboto">Free Games</a>
                    <a className="text-primary-color text-xs md:text-lg px-2 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3 font-roboto">New Release</a>
                    <a className="text-primary-color text-xs md:text-lg px-2 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3 font-roboto">Special Offers</a>
                    <a className="text-primary-color text-xs md:text-lg px-2 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3 font-roboto">Top Sellers</a>
                </div>
                <div className="flex justify-center mt-10 mb-10">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                        <div className="w-[400px] h-[400px] md:w-[360px] lg:w-[400px] bg-primary-color rounded-[20px]">
                            <div className="relative justify-center flex mt-5">                   
                                <img src="/assets/apex.jpg" className="w-[360px] h-[200px] rounded-t-[20px]" alt="" />                     
                                <span className="font-montserrat py-1 px-4 bg-secondary-color absolute right-5 md:right-0 lg:right-5 rounded-tr-[20px] font-semibold items-center">Action</span>
                            </div>                          
                            <h1 className="font-montserrat font-bold text-lg px-4 mt-[10px]">Apex Legends</h1>
                            <div className="flex justify-between">
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">4 Feb 2019</p>
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">Very Positive</p>
                            </div>
                            <div className="flex px-4 justify-between mt-[65px] items-center">                               
                                <h1 className="font-montserrat font-semibold text-base">Free to Play</h1>
                                <i className='bx bx-send px-2 py-2 bg-secondary-color rounded-[5px] cursor-pointer text-primary-color'></i>
                            </div>                         
                        </div>

                        <div className="w-[400px] h-[400px] md:w-[360px] lg:w-[400px] bg-primary-color rounded-[20px]">
                            <div className="relative justify-center flex mt-5">
                                <img src="/assets/fifa.jpg" className="w-[360px] h-[200px] rounded-t-[20px]" alt="" />     
                                <span className="font-montserrat py-1 px-4 bg-secondary-color absolute right-5 md:right-0 lg:right-5 rounded-tr-[20px] font-semibold items-center">Sports</span>
                            </div>                          
                            <h1 className="font-montserrat font-bold text-lg px-4 mt-[10px]">FIFA 23</h1>
                            <div className="flex justify-between">
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">1 Oct 2022</p>
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">No user reviews</p>
                            </div>
                            <div className="flex px-4 justify-between mt-[65px] items-center">                               
                                <h1 className="font-montserrat font-semibold text-base">Rp753.000</h1>
                                <i className='bx bx-send px-2 py-2 bg-secondary-color rounded-[5px] cursor-pointer text-primary-color'></i>
                            </div>                         
                        </div>

                        <div className="w-[400px] h-[400px] md:w-[360px] lg:w-[400px] bg-primary-color rounded-[20px]">
                            <div className="relative justify-center flex mt-5">
                                <img src="/assets/gtav.jpg" className="w-[360px] h-[200px] rounded-t-[20px]" alt="" />     
                                <span className="font-montserrat py-1 px-4 bg-secondary-color absolute right-5 md:right-0 lg:right-5 rounded-tr-[20px] font-semibold items-center">Action</span>
                            </div>                          
                            <h1 className="font-montserrat font-bold text-lg px-4 mt-[10px]">Grand Theft Auto V</h1>
                            <div className="flex justify-between">
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">17 Sep 2013</p>
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">Very Positive</p>
                            </div>
                            <div className="flex items-center px-4 justify-between mt-[65px]">
                                <div className="flex flex-col">
                                    <strike className="text-gray-color font-montserrat text-sm text-right">Rp290.000</strike>                                   
                                    <h1 className="font-montserrat font-semibold text-base">Rp145.000</h1>
                                </div>                               
                                <i className='bx bx-send px-2 py-2 bg-secondary-color rounded-[5px] cursor-pointer text-primary-color'></i>
                            </div>                         
                        </div>

                        <div className="w-[400px] h-[400px] md:w-[360px] lg:w-[400px] bg-primary-color rounded-[20px]">
                            <div className="relative justify-center flex mt-5">
                                <img src="/assets/stray.jpg" className="w-[360px] h-[200px] rounded-t-[20px]" alt="" />     
                                <span className="font-montserrat py-1 px-4 bg-secondary-color absolute right-5 md:right-0 lg:right-5 rounded-tr-[20px] font-semibold items-center">Adventure</span>
                            </div>                          
                            <h1 className="font-montserrat font-bold text-lg px-4 mt-[10px]">Stray</h1>
                            <div className="flex justify-between">
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">20 Jul 2022</p>
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">Overwhelmingly Positive</p>
                            </div>
                            <div className="flex px-4 justify-between mt-[65px] items-center">                               
                                <h1 className="font-montserrat font-semibold text-base">Rp149.999</h1>
                                <i className='bx bx-send px-2 py-2 bg-secondary-color rounded-[5px] cursor-pointer text-primary-color'></i>
                            </div>                         
                        </div>

                        <div className="w-[400px] h-[400px] md:w-[360px] lg:w-[400px] bg-primary-color rounded-[20px]">
                            <div className="relative justify-center flex mt-5">
                                <img src="/assets/valorant.jpg" className="w-[360px] h-[200px] rounded-t-[20px]" alt="" />     
                                <span className="font-montserrat py-1 px-4 bg-secondary-color absolute right-5 md:right-0 lg:right-5 rounded-tr-[20px] font-semibold items-center">Action</span>
                            </div>                          
                            <h1 className="font-montserrat font-bold text-lg px-4 mt-[10px]">VALORANT</h1>
                            <div className="flex justify-between">
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">2 Jun 2020</p>
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">Very Positive</p>
                            </div>
                            <div className="flex px-4 justify-between mt-[65px] items-center">                               
                                <h1 className="font-montserrat font-semibold text-base">Free to Play</h1>
                                <i className='bx bx-send px-2 py-2 bg-secondary-color rounded-[5px] cursor-pointer text-primary-color'></i>
                            </div>                         
                        </div>

                        <div className="w-[400px] h-[400px] md:w-[360px] lg:w-[400px] bg-primary-color rounded-[20px]">
                            <div className="relative justify-center flex mt-5">
                                <img src="/assets/fh5.jpg" className="w-[360px] h-[200px] rounded-t-[20px]" alt="" />     
                                <span className="py-1 px-4 font-montserrat bg-secondary-color absolute right-5 md:right-0 lg:right-5 rounded-tr-[20px] font-semibold items-center">Sports</span>
                            </div>                          
                            <h1 className="font-montserrat font-bold text-lg px-4 mt-[10px]">Forza Horizon 5</h1>
                            <div className="flex justify-between">
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">9 Nov 2021</p>
                                <p className="px-4 text-gray-color font-semibold font-montserrat text-base">Very Positive</p>
                            </div>
                            <div className="flex px-4 justify-between mt-[65px] items-center">                               
                                <h1 className="font-montserrat font-semibold text-base">Rp699.000</h1>
                                <i className='bx bx-send px-2 py-2 bg-secondary-color rounded-[5px] cursor-pointer text-primary-color'></i>
                            </div>                         
                        </div>

                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <a href="#" className="text-primary-color font-montserrat px-10 py-2 border border-primary-color rounded-lg">View All</a>
                </div>
            </div>
        </>
    )
}
export default Catalog;