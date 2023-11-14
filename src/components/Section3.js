import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section3 = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000,

            once:true,
        });
        AOS.refresh();
    }, []);
    const data = [
        {
            value : 'afghani hing' ,
            img : './images/rock1.png',
        },
        {
            value : 'pir naksir' ,
            img : './images/rock2.png',
        },
        {
            value : 'iranian hingra' ,
            img : './images/rock3.png',
        },
        {
            value : 'iranian sheer' ,
            img : './images/rock4.png',
        },
        {
            value : 'uzbeki' ,
            img : './images/rock5.png',
        },
        {
            value : 'uzbeki nukra dry' ,
            img : './images/rock6.png',
        },
        {
            value : 'krgyztan' ,
            img : './images/rock7.png',
        },
        {
            value : 'kazakhstan' ,
            img : './images/rock8.png',
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false, 
        pauseOnHover: true,
        cssEase: 'linear',
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className="bg-red flex flex-col items-center w-[100%] py-[3%] section3 max-sm:text-center max-sm:p-4" id="s3">
            <p className="text-white text-xl capitalize max-sm:text-xl">our products</p>
            <h1 className="text-white text-4xl font-bold max-sm:text-4xl max-sm:leading-snug">Explore our the food of the gods</h1>
            <div className=" w-3/4 margin-auto max-sm:w-[100%] max-sm:pl-[24%] max-sm:pr-[20%]">
                <Slider {...settings} className="max-sm:slidesToShow-2">
                {
                    data.map((d) => (
                        <div className="h-100 relative pb-6 max-sm:h-50" data-aos="fade-up">
                            <div className=" h-80 mt-10 transition duration-150 ease-out hover:ease-in hover:-translate-y-6 cursor-grab max-sm:h-40 ">
                                <img src={d.img} alt="rocks" className="rounded-xl h-[100%] max-sm:w-[100%] " />
                                <div className="absolute w-[100%] h-[100%]  top-0 left-0 opacity-0 transition duration-150 ease-out hover:opacity-100 hover:ease-in">
                                    <p className=" text-white absolute w-[100%] top-[75%] text-center capitalize max-sm:text-base ">{d.value}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
}

export default Section3;