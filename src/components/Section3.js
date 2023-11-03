import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = () => {
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
            img : './images/rock1.png',
        },
        {
            value : 'uzbeki nukra dry' ,
            img : './images/rock2.png',
        },
        {
            value : 'krgyztan' ,
            img : './images/rock3.png',
        },
        {
            value : 'kazakhstan' ,
            img : './images/rock4.png',
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
        autoplaySpeed: 4000,
        pauseOnFocus: false, 
        pauseOnHover: true,
        cssEase: 'linear',
        waitForAnimate: false
    };

    return (
        <div className="bg-red flex flex-col items-center w-[100%] py-20 section3">
            <p className="text-white uppercase">our products</p>
            <h1 className="text-white capitalize font-bold">explore our the food of the gods</h1>
            <div className=" w-3/4 margin-auto">
                <Slider {...settings}>
                {
                    data.map((d) => (
                        <div className="h-100 relative">
                            <div className=" h-80 mt-10 transition duration-150 ease-out hover:ease-in hover:-translate-y-6 cursor-grab ">
                                <img src={d.img} alt="rocks" className="rounded-xl " />
                                <div className="absolute w-[100%] h-[100%]  top-0 left-0 opacity-0 transition duration-150 ease-out hover:opacity-100 hover:ease-in">
                                    <p className=" text-white absolute top-[75%] left-[30%] uppercase ">{d.value}</p>
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