function News () {
    return (
        <>
            <div id="news" className="pt-32" data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="flex">
                    <div className="flex mx-auto flex-col w-full">
                        <h1 className="font-bold font-montserrat text-2xl text-center text-primary-color">Featured News</h1>
                        <p className="font-medium font-roboto text-sm text-center text-primary-color">various featured and latest news from all games</p>
                        <div className="items-center flex-row flex relative mx-auto justify-center text-center mt-5 w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-7">
                            <i class='bx bx-search-alt text-background-color absolute top-2 left-2 text-lg'></i>
                            <input className="font-montserrat w-full text-sm px-8 h-10 rounded-lg text-background-color placeholder:text-background-color
                              focus:outline-none focus:border-hover-color focus:ring-2 focus:ring-hover-color" type="text" placeholder="find the latest news" />
                            <button className="text-sm ml-[10px] rounded-lg px-4 h-8 cursor-pointer text-white bg-secondary-color hover:bg-hover-color">Search</button>                       
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <a className="text-primary-color text-sm font-roboto md:text-lg px-4 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3">Popular News</a>
                    <a className="text-primary-color text-sm font-roboto md:text-lg px-4 cursor-pointer active:bg-secondary-color hover:bg-secondary-color hover:rounded-lg py-3">Latest News</a>                  
                </div>
                <div className="mt-10 mb-10" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="xl:w-8/12 mx-auto">                     
                        <div className="flex justify-center">
                            <div className="flex bg-card-color w-[300px] h-[320px] xl:w-[512px] xl:h-[480px] mx-2 rounded-lg" data-aos="zoom-in">
                                <div className="relative">
                                    <img src="/assets/news/fifa23.jpg" className="justify-center rounded-t-lg" alt="" />
                                    <h1 className="font-bold font-montserrat text-base px-2 py-2">FIFA 23 Release Date, Gameplay and New Features</h1>
                                    <p className="text-sm font-montserrat px-2">EA Sports sticks to a Friday release in the final week of September and we can grab a copy of FI....</p>
                                    <p className="text-gray-color font-montserrat font-medium text-xs px-2 absolute bottom-0 py-[10px]">4 days ago</p>
                                </div>
                            </div>

                            <div className="flex bg-card-color w-[300px] h-[320px] xl:w-[512px] xl:h-[480px] mx-2 rounded-lg" data-aos="zoom-in">
                                <div className="relative">
                                    <img src="/assets/news/gtavi.jpg" className="justify-center rounded-t-lg" alt="" />
                                    <h1 className="font-bold font-montserrat text-base px-2 py-2">FIFA 23 Release Date, Gameplay and New Features</h1>
                                    <p className="text-sm font-montserrat px-2">GTA 6 Release Date: Rockstar Cleans Up Image After ...</p>
                                    <p className="text-gray-color font-montserrat font-medium text-xs px-2 absolute bottom-0 py-[10px]">21 hours ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-auto justify-center mt-5">                       
                            <div className="flex flex-col xl:flex-row items-center">
                                <div className="flex bg-card-color sm:w-[99%] md:w-[82%] h-[120px] xl:h-[150px] mx-2 my-4 rounded-lg" data-aos="zoom-in-right">
                                    <div className="relative flex">
                                        <img src="/assets/news/bf.jpg" className="w-[100px] h-[120px] xl:h-[150px] object-cover rounded-l-lg" alt="" />
                                        <div>                                  
                                            <h1 className="font-bold font-montserrat text-sm px-2 py-2">Battlefield 2042 Is Finally Fixing This Major Gameplay Issue</h1>
                                            <p className="text-xs font-montserrat px-2">Rumors even circulated suggesting the team would abandon "Battlefield 2042" altogether after ....</p>
                                            <p className="text-gray-color font-montserrat font-medium text-xs px-2 absolute bottom-0 py-[10px]">1 weeks ago</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex bg-card-color h-[120px] sm:w-[99%] md:w-[82%] xl:h-[150px] mx-2 my-4 rounded-lg" data-aos="zoom-in-left">
                                    <div className="relative flex">
                                        <img src="/assets/news/apex.jpg" className="w-[100px] h-[120px] xl:h-[150px] object-cover rounded-l-lg" alt="" />
                                        <div>                                  
                                            <h1 className="font-bold font-montserrat text-sm px-2 py-2">Apex Legends’ new legend Vantage, Hunted update release ...</h1>
                                            <p className="text-xs font-montserrat px-2">Apex Legends' next Legend, the sharpshooter known as Vantage, will arrive on Aug. 9 as part of the game's Hunted update,...</p>
                                            <p className="text-gray-color font-montserrat font-medium text-xs px-2 absolute bottom-0 py-[10px]">2 days ago</p>
                                        </div>
                                    </div>
                                </div>
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
export default News;