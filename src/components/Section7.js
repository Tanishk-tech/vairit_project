import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section7 = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    const navigate = useNavigate() ;

    const handleChange = () => {
        navigate("/book");
    }

    return (
        <div className="flex  p-[6%] max-sm:px-4 max-sm:flex-col" id="s7">
            <div className="w-[70%] max-sm:w-[100%] " data-aos="fade-up" >
                <img src="./images/book.png" alt="book" className="w-[90%] rotate_3d " />
            </div>
            <div className="flex flex-col justify-center w-[30%]  max-sm:w-[100%] max-sm:items-center max-sm:text-center max-sm:pt-10"  data-aos="fade-up" >
                <h2 className="text-4xl text-yellow capitalize pb-4 font-bold">our brochure</h2>
                <p className="pb-6 max-sm:text-xl">We welcome you to download and peruse our business's e-Brochure for an in depth look at your business</p>
                <button className="w-fit border-2 border-solid border-red text-base font-bold capitalize text-center  px-8  py-4 hover:bg-red hover:text-white rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm" onClick={handleChange} >view more</button>
            </div>
        </div>
    )
}

export default Section7 ;