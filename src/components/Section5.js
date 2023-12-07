import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

const Section5 = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    const data= [
        {
            img:'./images/seed1.png',
            value:'Identifying the Plant',
            text:'Asafoetida is extracted from the root of the asafoetida plant during spring. Farmers must locate the plant and carefully dig around its root before May.'
        },
        {
            img:'./images/seed4.png',
            value:'Extracting Asafoetida',
            text:'In mid-July, farmers make small cuts on the root. After waiting for 1-2 days, they collect the oozing asafoetida and repeat the process until mid-September. Weather conditions affect the quantity harvested.'
        },
        {
            img:'./images/seed3.png',
            value:'Exposing Roots to Sun',
            text: 'The asafoetida plants roots are exposed to direct sun for 5–10 days before extraction.This helps dry and prepare the resin.'
        },
        {
            img:'./images/seed2.png',
            value:'Storing and Packing for Export',
            text:'By the end of September, farmers bring their harvest down from the mountains. It undergoes quality checks and is repackaged for export to India.'
        },
    ]

    const navigate=useNavigate();
    const handleClick = () => {
        navigate('/Process');
    }

    return (
        <div className="flex pl-[12%] pr-[6%] pt-[6%] pb-[6%] bg-grey max-sm:px-4 max-sm:pt-[12%] max-sm:flex-col" id="s5">
            <div className="w-2/5 max-sm:w-[100%]" data-aos="fade-down">
                <img src="./images/tree.png" alt="tree" />
            </div>
            <div className="w-3/5 flex flex-col  pl-20 justify-center max-sm:w-[100%] max-sm:items-center max-sm:px-4">
                <h2 className="text-4xl capitalize text-red font-5xl font-bold mb-6 max-sm:mb-0 max-sm:pt-8 max-sm:text-2xl  max-sm : leading-tight">harvesting hing</h2>
                {
                    data.map((d) =>(
                        <div className="flex mb-8 max-sm:flex-col max-sm:mb-0 " data-aos="flip-down">
                            <div className="pr-6 w-1/5 max-sm:flex max-sm:justify-center max-sm:w-full max-sm:pr-0">
                                <img src={d.img} alt="seed" className="p-2 w-full mt-3 max-sm:w-2/5" />
                            </div>
                            <div className="flex w-4/5  flex-col justify-center max-sm:w-full max-sm:text-center ">
                                <h2 className=" text-3xl max-sm:text-2xl  max-sm:leading-tight ">{d.value}</h2>
                                <p className=" text-base pr-[35%] max-sm:text-base max-sm:pr-0">{d.text}</p>
                            </div>
                        </div>
                    ))
                }
                <button className="w-fit border-2 border-solid border-red text-base font-bold capitalize text-center  px-8  py-4 hover:bg-red hover:text-white rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm max-sm:mt-6 " onClick={handleClick} >read more</button>
            </div>
        </div>
    )
}

export default Section5 ;