const Section1 = () => {
    return (
        <div className="flex bg-red pl-[12%]  items-center">
            <div className="flex flex-col w-3/5">
                <h2 className="text-white font-bold capitalize mt-10 ">india's</h2>
                <h1 className="text-yellow font-bold uppercase ">top leading provider in</h1>
                <h1 className="text-white font-bold uppercase">the hing import business</h1>
                <p className="text-[24px] text-white font-thin pb-[20px]">For more than 5 decades our company is involved in imports of hing and are currently importing hing from 5 different origins</p>
                <div className="grid grid-cols-2 gap-x-3 mb-6 w-[85%]">
                    <div  className="flex bg-white  p-3 rounded-xl mb-3 ">
                        <div className="flex items-center w-[35%]">
                            <img src="./images/afgan.png" alt="map" className="w-24 h-20" />
                        </div>
                        <div className="flex flex-col justify-center text-center w-[65%]">
                            <h2 className="uppercase text-yellow text-2xl font-bold">afghanistan</h2>
                            <p className="capitalize">watani safed</p>
                        </div>
                    </div>
                    <div  className="flex bg-white  p-3 rounded-xl mb-3  ">
                        <div className="flex items-center w-[35%]">
                            <img src="./images/iran.png" alt="map" className="w-24 h-20" />
                        </div>
                        <div className="flex flex-col justify-center text-center w-[65%]">
                            <h2 className="uppercase text-yellow text-2xl font-bold">iran</h2>
                            <p className="capitalize">hingra</p>
                        </div>
                    </div>                
                    <div  className="flex bg-white  p-3 rounded-xl mb-3 ">
                        <div className="flex items-center w-[35%]">
                            <img src="./images/uzbek.png" alt="map" className="w-24 h-20" />
                        </div>
                        <div className="flex flex-col justify-center text-center w-[65%]">
                            <h2 className="uppercase text-yellow text-2xl font-bold">uzbekistan</h2>
                            <p className="capitalize">uzbeki hing</p>
                        </div>
                    </div>                
                    <div  className="flex bg-white  p-3 rounded-xl mb-3 ">
                        <div className="flex items-center w-[35%]">
                            <img src="./images/kazak.png" alt="map" className="w-24 h-20" />
                        </div>
                        <div className="flex flex-col justify-center text-center w-[65%]">
                            <h2 className="uppercase text-yellow text-2xl font-bold">kazakhstan</h2>
                            <p className="capitalize">kazakhi hing</p>
                        </div>
                    </div>                
                    <div  className="flex bg-white  p-3 rounded-xl mb-3 ">
                        <div className="flex items-center w-[35%]">
                            <img src="./images/kyrg.png" alt="map" className="w-24 h-20" />
                        </div>
                        <div className="flex flex-col justify-center text-center w-[65%]">
                            <h2 className="uppercase text-yellow text-2xl font-bold">kyrgyztan</h2>
                            <p className="capitalize">kyrgyz hing</p>
                        </div>
                    </div>                
                </div>

                <span className="bg-yellow w-fit text-xs font-bold uppercase text-center px-12 py-6 mb-10 hover:bg-white hover:text-red rounded-xl cursor-pointer">discover more</span>
            </div>
            <div className="w-2/5">
                <img src="./images/section1.png" alt="section1image" className="w-[70%] ml-[30%] mt-[50%] " />
            </div>
        </div>
    )
}

export default Section1;