const Section1 = () => {
    return (
        <div className="flex bg-red pl-[10%] h-[600px] items-center">
            <div className="flex flex-col w-3/5">
                <h2 className="text-white font-bold capitalize ">india's</h2>
                <h1 className="text-yellow font-bold uppercase ">top leading provider in</h1>
                <h1 className="text-white font-bold uppercase">the hing import business</h1>
                <p className="text-[24px] text-white font-thin pb-[20px]">For more than 5 decades our company is involved in imports of hing and are currently importing hing from 5 different origins</p>
                <span className="bg-yellow w-[20%] text-[15px] font-bold uppercase text-center p-[10px] hover:bg-white hover:text-red rounded-[5px]">discover more</span>
            </div>
            <div>
                <img src="./images/section1.png" alt="section1image" className="w-[70%] ml-[30%] mt-[10%] " />
            </div>
        </div>
    )
}

export default Section1;