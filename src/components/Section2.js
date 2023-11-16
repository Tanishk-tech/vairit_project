import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section2= () => {
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="flex w-[100%] h-[600px]  pl-[12%] mb-16  items-center relative max-sm:pl-0 max-sm:px-4 max-sm:flex-col max-sm:h-auto" id="s2" >
            <div className="w-2/5 h-[100%]" >
                <div className="bg-yellow z-0 absolute left-0 top-0 w-[25%] h-[60%] max-sm:hidden" data-aos="fade-left"></div>
                <div className="hing-bowl z-10 absolute top-[10%] w-[30%] h-[80%] rounded-xl max-sm:hidden" data-aos="fade-right">
                    <div className="bg-red z-20 flex w-[70%] items-center  mt-[96%] ml-[15%] p-5 rounded-xl">
                        <img src="./images/organic.png" alt="organic" className="w-[20%] pr-3 border-solid border-r border-white " />
                        <p className="text-2xl capitalize text-white font-bold pl-3">100% organic</p>
                    </div>
                </div>
                {/* <div className="hidden hing-bowl z-10 relative w-[30%] h-[80%] rounded-xl max-sm:block">
                    <div className="bg-red z-20 flex w-[70%] items-center  mt-[96%] ml-[15%] p-5 rounded-xl">
                        <img src="./images/organic.png" alt="organic" className="w-[20%] pr-3 border-solid border-r border-white " />
                        <p className="text-2xl uppercase text-white font-bold pl-3">100% organic</p>
                    </div>
                </div> */}
            </div>
            <div className="w-3/5 flex flex-col max-sm:w-[100%] max-sm:text-center max-sm:items-center max-sm:pt-6 max-sm:w-[100%]" data-aos="fade-right" >
                <p className="capitalize text-xl pb-1 max-sm:text-2xl" >our introduction</p>
                <h1 className="text-red text-4xl leading-none font-bold pb-1 max-sm:text-4xl " >Pure Agriculture and Organic</h1>
                <h2 className="text-3xl pb-1 max-sm:leading-snug">We're Leader in Agriculture Market</h2>
                <p className="pb-5 text-base pr-[25%] leading-tight max-sm:pr-0">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words even slightly believable.</p>
                <ul className="list-style-none mb-6 text-start ">
                    <li className="tick-symbol pl-8 pb-3 text-base max-sm:text-xl" >Organic food contains more vitamins</li>
                    <li className="tick-symbol pl-8 pb-3 text-base max-sm:text-xl " >Eat organic because supply meets demand</li>
                    <li className="tick-symbol pl-8 pb-3 text-base max-sm:text-xl ">Organic food is never irradiated</li>
                </ul>
                <button className="bg-red w-fit text-white text-base font-bold capitalize text-center px-8 py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm ">read more</button>
            </div>
        </div>
    )
}

export default Section2;