const Section5 = () => {
    return (
        <div className="flex pl-[12%] pr-[6%] pt-[6%] pb-[6%] max-sm:px-4 max-sm:flex-col" id="s5">
            <div className="w-2/5 max-sm:w-[100%]">
                <img src="./images/tree.png" alt="tree" />
            </div>
            <div className="w-3/5 flex flex-col  pl-20 justify-center max-sm:w-[100%] max-sm:items-center">
                <h2 className="uppercase text-red font-5xl font-bold mb-6 max-sm:pt-10">harvesting hing</h2>
                <div className="flex mb-8">
                    <div className="pr-6">
                        <img src="./images/seed1.png" alt="seed" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2>Identifying the plant during April-May</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                </div>

                <div className="flex mb-8">
                    <div className="pr-6">
                        <img src="./images/seed4.png" alt="seed" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2>Exposing the roots to direct sun</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                </div>

                <div className="flex mb-8">
                    <div className="pr-6">
                        <img src="./images/seed3.png" alt="seed" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2>Extracting the asafoetida</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                </div>

                <div className="flex mb-8">
                    <div className="pr-6">
                        <img src="./images/seed4.png" alt="seed" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2>Storing and packing for fursther export</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                </div>
                <button className="bg-red w-fit text-white text-base font-bold uppercase text-center  px-8  py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer ">read more</button>
            </div>
        </div>
    )
}

export default Section5 ;