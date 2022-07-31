import React from "react";

function Market () {
    return (
        <>
            <div className="pt-32 md:px-[90px]" id="market" data-aos="fade-right">
                <div className="flex">
                    <div className="flex mx-auto flex-col w-full">
                        <h1 className="font-bold font-montserrat text-2xl text-center text-primary-color">Market</h1>
                        <p className="font-medium font-montserrat text-sm text-center text-primary-color">pay for in-game items easily and quickly</p>
                        <div className="items-center flex-row flex relative mx-auto justify-center text-center mt-5 w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-7">
                            <i class='bx bx-search-alt text-background-color absolute top-2 left-2 text-lg'></i>
                            <input className="font-montserrat w-full text-sm px-8 h-10 rounded-lg text-background-color placeholder:text-background-color
                              focus:outline-none focus:border-hover-color focus:ring-2 focus:ring-hover-color" type="text" placeholder="find your items" />
                            <button className="font-montserrat text-sm ml-[10px] rounded-lg px-4 h-8 cursor-pointer text-white bg-secondary-color hover:bg-hover-color">Search</button>                       
                        </div>
                    </div>                 
                </div>
                <div className="flex w-full justify-center">
                    <a className="font-montserrat text-primary-color text-xs md:text-lg px-4 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3">All Items</a>
                    <a className="font-montserrat text-primary-color text-xs md:text-lg px-4 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3">Popular Items</a>                  
                </div>
                <div className="mt-10 mb-10 flex justify-center">
                    <div className="flex flex-col w-full justify-center">                       
                        <div className="flex bg-primary-color mx-4">
                            <h1 className="font-medium text-base w-full px-[10px] font-montserrat">NAME</h1>
                            <h1 className="font-medium text-base w-6/12 text-center border-l border-l-background-color font-montserrat">PRICE</h1>
                        </div>
                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/apex.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">500 Apex Coins</a>
                                    <p className="w-full text-gray-color font-montserrat">Apex Legends</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp72.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/apex.png" className="w-[30px] h-[30px]" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">1000 Apex Coins</a>
                                    <p className="w-full text-gray-color font-montserrat">Apex Legends</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp148.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/valorant.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">125 Points</a>
                                    <p className="w-full text-gray-color font-montserrat">VALORANT</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp15.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/valorant.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">8150 Points</a>
                                    <p className="w-full text-gray-color font-montserrat">VALORANT</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp800.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/fifa.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">FUT 22 - FIFA Points 1050</a>
                                    <p className="w-full text-gray-color font-montserrat">FIFA 22</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp148.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/fifa.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">FUT 22 - FIFA Points 12000</a>
                                    <p className="w-full text-gray-color font-montserrat">FIFA 22</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp1.420.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/gtav.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">Red Shark Card: GTA$100,000</a>
                                    <p className="w-full text-gray-color font-montserrat">Grand Theft Auto V</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp50.000</h1>
                        </div>

                        <div className="flex bg-primary-color mx-4 mt-[10px] items-center">
                            <div className="flex w-full px-[10px] items-center">
                                <img src="/assets/gtav.png" className="w-[30px] h-[30px] px-0" alt="" />
                                <div className="px-[10px]">                                  
                                    <a href="#" className="w-full font-bold font-montserrat">Red Shark Card: GTA$500,000</a>
                                    <p className="w-full text-gray-color font-montserrat">Grand Theft Auto V</p>
                                </div>
                            </div>
                            <h1 className="font-bold w-6/12 text-center font-montserrat">Rp149.850</h1>
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
export default Market;