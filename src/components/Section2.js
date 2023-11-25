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
            <div className="w-3/5 flex flex-col pr-[10%] max-sm:w-[100%] max-sm:text-center max-sm:items-center max-sm:pt-6 max-sm:w-[100%] max-sm:px-6" data-aos="fade-right" >
                <p className="text-red uppercase mb-3 font-bold max-sm:text-xl">Welcome to SRI RAGHUNATH JI OVERSEAS</p>
                {/* <h1 className="text-red text-4xl uppercase mb-3 leading-tight font-bold max-sm:text-4xl " >Welcome to SRI RAGHUNATH JI OVERSEAS</h1> */}
                <h1 className="text-red text-3xl mb-3 leading-tight font-bold  max-sm:text-4xl " > A realm where asafoetida is not just an ingredient.</h1>
                <h2 className="text-2xl mb-3 max-sm:leading-snug"> "Your Flavorful Journey, Our Hing Expertise."</h2>
                <p className="text-base mb-3 pr-[25%] leading-tight max-sm:p-3">it's an emblem of culinary excellence. We take great pride in introducing our distinguished line of manufactured hing and hing products, meticulously crafted to enhance your gastronomic journeys. At the very core of our mission lies an unyielding commitment to uncompromising quality and unwavering dedication to exceeding customer expectations.</p>
                <ul className="list-style-none mb-6 text-start ">
                    <li className="tick-symbol pl-8 pb-3 text-base max-sm:text-xl" >Tailored to Your Tastes and Preferences.</li>
                    <li className="tick-symbol pl-8 pb-3 text-base max-sm:text-xl " >Unrivaled Expertise in Asafoetida.</li>
                    <li className="tick-symbol pl-8 pb-3 text-base max-sm:text-xl ">Quality Beyond Compare, Prices Beyond and Belief.</li>
                </ul>
                <button className=" w-fit text-base border-2 border-solid border-red font-bold capitalize text-center px-8 py-4 hover:bg-red hover:text-white rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm ">read more</button>
            </div>
        </div>
    )
}

export default Section2;