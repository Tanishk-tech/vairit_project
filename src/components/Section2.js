const Section2= () => {
    return (
        <div className="flex w-[100%] h-[600px]  pl-[10%]  items-center relative">
            <div className="w-2/5 h-[100%]">
                <div className="bg-yellow z-0 absolute left-0 top-0 w-[25%] h-[60%]"></div>
                <div className="hing-bowl z-10 absolute top-[10%] w-[30%] h-[80%]">
                    <div className="bg-red z-20 flex w-[70%] items-center rounded-[10px] mt-[96%] ml-[15%] p-[20px]">
                        <img src="./images/organic.png" alt="organic" className="w-[20%] pr-[10px] border-solid border-r-[1px] border-white" />
                        <p className="text-[24px] uppercase text-white font-bold pl-[10px]">100% organic</p>
                    </div>
                </div>
            </div>
            <div className="w-3/5 flex flex-col">
                <p className="uppercase pb-[15px]">our introduction</p>
                <h1 className="text-red font-bold pb-[20px]">Pure Agriculture and Organic</h1>
                <h2 className="pb-[10px]">We're Leader in Agriculture Market</h2>
                <p className="pb-[20px]">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words even slightly believable.</p>
                <ul className="list-style-none ">
                    <li className="tick-symbol pl-[30px] pb-[10px]">Organic food contains more vitamins</li>
                    <li className="tick-symbol pl-[30px] pb-[10px]">Eat organic because supply meets demand</li>
                    <li className="tick-symbol pl-[30px] pb-[20px]">Organic food is never irradiated</li>
                </ul>
                <span className="bg-red w-[20%] text-white text-[15px] font-bold uppercase text-center p-[10px] hover:bg-yellow hover:text-red rounded-[5px] ">read more</span>
            </div>
        </div>
    )
}

export default Section2;