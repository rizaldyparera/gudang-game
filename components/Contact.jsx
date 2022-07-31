function Contact () {
    return (
        <>
            <div id="contact" className="pt-10 pb-10 xl:px-[90px] bg-primary-color">
                <div className="flex flex-col lg:flex-row px-4">
                    <div className="flex">                      
                        <div className="flex flex-col ">                      
                            <h1 className="font-bold font-montserrat text-2xl">Need Help ?</h1>
                            <div className="flex bg-background-color px-4 py-3 rounded-lg">                     
                                <i className='bx bx-chat text-base text-primary-color pr-2 relative'></i>
                                <p className="text-base font-montserrat text-primary-color">Contact Us</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:mx-auto sm:flex-row">                     
                        <div className="flex flex-col mt-5 lg:mt-0 xl:px-[25px]">
                            <h1 className="font-bold font-montserrat text-lg">Company</h1>
                            <a href="#" className="font-montserrat text-lg w-[20%] sm:w-[60%]">About Us</a>
                            <a href="#" className="font-montserrat text-lg w-[28%] sm:w-[90%]">Privacy Policy</a>
                            <a href="#" className="font-montserrat text-lg w-[15%]">Support</a>
                            <a href="#" className="font-montserrat text-lg w-[35%] sm:w-full">Terms of Service</a>
                        </div>
                        <div className="flex flex-col mt-5 sm:mx-auto xl:px-[25px] lg:mt-0">
                            <h1 className="font-bold font-montserrat text-lg">Resources</h1>
                            <a href="#" className="font-montserrat text-lg w-[15%]">Careers</a>
                            <a href="#" className="font-montserrat text-lg w-[40%] sm:w-[75%]">Community Rules</a>
                            <a href="#" className="font-montserrat text-lg w-[55%] sm:w-full">Publish on GudangGame</a>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 lg:mt-0">
                        <h1 className="font-bold font-montserrat text-2xl xl:w-full mb-[5px]">Get GudangGame News on :</h1>
                        <div className="flex">                           
                            <a href="#" className="font-montserrat text-3xl pr-2"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="#" className="font-montserrat text-3xl pr-2"><i className='bx bxl-instagram-alt'></i></a>
                            <a href="#" className="font-montserrat text-3xl pr-2"><i className='bx bxl-tiktok'></i></a>
                            <a href="#" className="font-montserrat text-3xl pr-2"><i className='bx bxl-youtube'></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-2 bg-card-color">
                <div className="flex items-center justify-between px-4 xl:px-[90px]">
                    <p className="font-montserrat text-sm">© 2022 OnlyMARS. All rights reserved.</p>
                    <h1 className="font-bold font-montserrat text-lg">Gudang<span className="text-secondary-color">Game</span></h1>
                </div>
            </div>
        </>
    )
}
export default Contact;