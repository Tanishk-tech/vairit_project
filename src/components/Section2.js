const Section2= () => {
    return (
        <div className="flex w-[100%] h-[600px]  pl-[12%] mb-16  items-center relative">
            <div className="w-2/5 h-[100%]">
                <div className="bg-yellow z-0 absolute left-0 top-0 w-[25%] h-[60%]"></div>
                <div className="hing-bowl z-10 absolute top-[10%] w-[30%] h-[80%] rounded-xl">
                    <div className="bg-red z-20 flex w-[70%] items-center  mt-[96%] ml-[15%] p-5 rounded-xl">
                        <img src="./images/organic.png" alt="organic" className="w-[20%] pr-3 border-solid border-r border-white " />
                        <p className="text-2xl uppercase text-white font-bold pl-3">100% organic</p>
                    </div>
                </div>
            </div>
            <div className="w-3/5 flex flex-col">
                <p className="uppercase pb-4">our introduction</p>
                <h1 className="text-red font-bold pb-5">Pure Agriculture and Organic</h1>
                <h2 className="pb-3">We're Leader in Agriculture Market</h2>
                <p className="pb-5">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words even slightly believable.</p>
                <ul className="list-style-none mb-6 ">
                    <li className="tick-symbol pl-8 pb-3 text-base">Organic food contains more vitamins</li>
                    <li className="tick-symbol pl-8 pb-3 text-base">Eat organic because supply meets demand</li>
                    <li className="tick-symbol pl-8 pb-3 text-base">Organic food is never irradiated</li>
                </ul>
                <span className="bg-red w-fit text-white text-base font-bold uppercase text-center px-8 py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer ">read more</span>
            </div>
        </div>
    )
}

export default Section2;