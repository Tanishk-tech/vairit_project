import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section6 = () =>{
    useEffect(() => {
        AOS.init({ 
            duration: 1000,
            disable: window.innerWidth < 1024,
            once:true,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="flex flex-col items-center bg-red px-[12%] py-[6%] relative max-sm:px-4 max-sm:py-[15%] " id="s6">
            <img src="./images/section6_icon.png" alt="icon" className="absolute top-0 right-0 w-[8%] max-sm:w-[30%] " data-aos="fade-up-right" />
            <h1 className="text-[8rem] font-bold text-yellow max-sm:text-8xl" data-aos="fade-right">50</h1>
            <h2 className="text-3xl capitalize leading-none text-white pb-4 max-sm:text-4xl max-sm:text-center" data-aos="fade-right">years of experience</h2>
            <p className="text-white text-center text-xl max-sm:text-xl" data-aos="fade-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galleof type and scrambled it to make a type specimen book</p>
        </div>
    )
}

export default Section6 ; 