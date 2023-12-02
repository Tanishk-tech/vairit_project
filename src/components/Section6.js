import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section6 = () =>{
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="flex flex-col items-center bg-red px-[12%] py-[6%] relative max-sm:px-4 max-sm:pt-[20%] max-sm:pb-[10%] " id="s6">
            <img src="./images/section6_icon.png" alt="icon" className="absolute top-0 right-0 w-[8%] max-sm:w-[30%] " data-aos="fade-up-right" />
            <h1 className="text-[8rem] font-bold text-yellow max-sm:text-7xl" data-aos="fade-right">50</h1>
            <h2 className="text-3xl capitalize leading-none text-white pb-4 max-sm:text-2xl max-sm:text-center" data-aos="fade-right">YEARS OF LEGACY</h2>
            <p className="text-white text-center text-xl max-sm:text-base" data-aos="fade-right">SRI RAGHUNATH JI OVERSEAS has been a pioneering figure in the Hing import business since its inception. For more than 50 years, we have been a reliable source of premium-quality Hing, serving a clientele which stretches PAN INDIA. Our unwavering commitment to excellence has made us a trusted name In the industry.</p>
        </div>
    )
}

export default Section6 ; 