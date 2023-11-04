const Section8 = () => {
    return (
        <div className="flex pl-[10%] py-[6%] bg-grey max-sm:flex-col-reverse max-sm:px-4 max-sm:items-center max-sm:p-[6%]" id="s8">
            <div className="flex flex-col justify-center w-[50%] max-sm:w-[100%] max-sm:items-center max-sm:text-center max-sm:pt-10">
                <h2 className="text-3xl text-red uppercase pb-4 font-bold">shri raghunath ji overseas</h2>
                <p className="pb-6 max-sm:text-xl">Your Gateway to Global Flavor Sourcing. Navigate our World of Spices and Aromatics with Ease</p>
                <button className="bg-red w-fit text-white text-base font-bold uppercase text-center  px-8  py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer ">explore</button>
            </div>
            <div className="w-[50%] max-sm:w-[100%] max-sm:contents">
                <img src="./images/globe.jpeg" alt="globe" className="" />
            </div>
        </div>
    )
}

export default Section8 ;