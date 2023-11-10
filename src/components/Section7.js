import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section7 = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000,
            disable: window.innerWidth < 1024,
            once:true,
        });
        AOS.refresh();
    }, []);

    const navigate = useNavigate() ;

    const handleChange = () => {
        navigate("/book");
    }

    return (
        <div className="flex  py-[6%] max-sm:px-4 max-sm:flex-col" id="s7">
            <div className="w-[50%] max-sm:w-[100%] pl-[6%]">
                <img src="./images/book.png" alt="book" className="w-[80%] " />
            </div>
            <div className="flex flex-col justify-center w-[50%] max-sm:w-[100%] max-sm:items-center max-sm:text-center max-sm:pt-10" >
                <h2 className="text-5xl text-yellow uppercase pb-4 font-bold">our brochure</h2>
                <p className="pb-6 max-sm:text-xl">We welcome you to download and peruse our business's e-Brochure for an in depth look at your business</p>
                <button className="bg-red w-fit text-white text-base font-bold uppercase text-center  px-8  py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm" onClick={handleChange} >view more</button>
            </div>
        </div>
    )
}

export default Section7 ;