import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section9 from "./Section9";
import Section10 from "./Section10";

const Brand = () =>{
    const data = [
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        // {
        //     value : 'brands' ,
        //     img : './images/brandf2.avif',
        // },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        // {
        //     value : 'brands' ,
        //     img : './images/brandf2.avif',
        // },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        {
            value : 'brands' ,
            img : './images/brandf1.png',
        },
        // {
        //     value : 'brands' ,
        //     img : './images/brandf2.avif',
        // },  
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false, 
        pauseOnHover: true,
        cssEase: 'linear',
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className="bg-red browse">
            <Header />
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase max-sm:text-3xl">our brands</h1>
            </div>
            <div className="flex text-white pl-[4%] pr-[4%] py-[4%] max-sm:flex-col">
                <div className="flex flex-col w-1/2 max-sm:w-full max-sm:mb-6">
                    <div className="flex justify-center max-sm:mb-3">
                        <img src="./images/brand1.png" alt="bottle" className="w-3/5"  />
                    </div>
                    <div className="flex justify-center">
                        <img src="./images/brand1.png" alt="bottle" className="w-1/5 h-full bg-white border-solid border-4 border-yellow mr-3"  />
                        <img src="./images/brand1.png" alt="bottle" className="w-1/5 h-full bg-white border-solid border-4 border-yellow"  />
                    </div>
                </div>
                <div className="flex flex-col w-1/2 justify-center max-sm:w-full max-sm:text-center">
                    <h3 className="mb-6 max-sm:text-xl">URBAN PLATTER HING POWDER, 100G [COMPOUNDED
                    ASAFOETIDA | SPICE | SAVOURY & UMAMI FLAVOUR |
                    (ADD TO DALS, VEGETABLES, GRAVIES)</h3>
                    <div className="flex items-center mb-6 max-sm:justify-center ">
                        <img src="./images/brand3.png"  alt="vegetarian"  className="w-[3%] mr-3"/>
                        <span className="text-base">This is a Vegetarian product.</span>
                    </div>
                    <div className="mb-3 max-sm:flex max-sm:justify-center">
                        <img src="./images/brand2.png" alt="amazon" className="w-[15%] rounded-xl max-sm:w-1/4" />
                    </div>
                    <h2 className="text-yellow max-sm:text-2xl max-sm:mb-3">About this item</h2>
                    <div className="flex w-1/2 max-sm:w-full">
                        <div className="w-1/2 pr-3">
                            <p>100% Raw Hing Direct from Farm Hand Pounded, Hand Cleaned Brand- Persian Foods</p>
                        </div>
                        <div className="w-1/2 ">
                            <p>Variety- Hing Net Quantity- 10 gram Diet Type- Vegetarian Speciality- Organic</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col ">
                <h1 className="text-3xl w-fit border-solid border-b-4 border-yellow px-10 pb-3 m-auto max-sm:mt-4 ">CLIENTS</h1>
                <div className=" w-3/5 pt-6 m-auto pb-[3%]  max-sm:w-[100%] max-sm:pl-[24%] max-sm:pr-[20%]">
                    <Slider {...settings} className="max-sm:slidesToShow-2">
                    {
                        data.map((d) => (
                            <div className=" pt-4 h-10 " >
                                <div className="cursor-grab flex items-center justify-center ">
                                    <img src={d.img} alt="rocks" className="rounded-xl w-[50%] h-[10%]  h-[100%] max-sm:w-[100%] " />
                                    
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>
            <Section9 />
            <Section10 />
        </div>
    )
}

export default Brand ;