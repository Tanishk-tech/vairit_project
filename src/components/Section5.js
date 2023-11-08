const Section5 = () => {
    const data= [
        {
            img:'./images/seed1.png',
            value:'Identifying the plant during April-May',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
        },
        {
            img:'./images/seed4.png',
            value:'Exposing the roots to direct sun',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
        },
        {
            img:'./images/seed3.png',
            value:'Extracting the asafoetida',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
        },
        {
            img:'./images/seed2.png',
            value:'Storing and packing for fursther export',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
        },
    ]
    return (
        <div className="flex pl-[12%] pr-[6%] pt-[6%] pb-[6%] max-sm:px-4 max-sm:flex-col" id="s5">
            <div className="w-2/5 max-sm:w-[100%]">
                <img src="./images/tree.png" alt="tree" />
            </div>
            <div className="w-3/5 flex flex-col  pl-20 justify-center max-sm:w-[100%] max-sm:items-center max-sm:px-4">
                <h2 className="uppercase text-red font-5xl font-bold mb-6 max-sm:pt-10 max-sm:text-4xl  max-sm : leading-tight">harvesting hing</h2>
                {
                    data.map((d) =>(
                        <div className="flex mb-8">
                            <div className="pr-6 max-sm:w-[75%]">
                                <img src={d.img} alt="seed" className="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="max-sm:text-4xl  max-sm : leading-tight">{d.value}</h2>
                                <p className="max-sm:text-xl">{d.text}</p>
                            </div>
                        </div>
                    ))
                }
                <button className="bg-red w-fit text-white text-base font-bold uppercase text-center  px-8  py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm ">read more</button>
            </div>
        </div>
    )
}

export default Section5 ;