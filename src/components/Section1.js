import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section1 = () => {

    const data = [
        {
            country : 'afghanistan',
            location: 'watani safed',
            image : './images/afgan.png'
        },

        {
            country : 'iran',
            location: 'hingra',
            image : './images/iran.png'
        },

        {
            country : 'uzbekistan',
            location: 'uzbeki hing',
            image : './images/uzbek.png'
        },
        {
            country : 'kazakhstan',
            location: 'kazakhi hing',
            image : './images/kazak.png'
        },
        {
            country : 'kyrgyztan',
            location: 'kyrgyz hing',
            image : './images/kyrg.png'
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false, 
        pauseOnHover: true,
        cssEase: 'linear',
        waitForAnimate: false
    };

    return (
        <div className="section1 flex bg-red pl-[12%] pt-[80px] items-center max-sm:flex-col max-sm:px-4" id="s1">
            <div className="flex flex-col w-3/5 text-white max-sm:w-[100%] max-sm:text-center max-sm:items-center">
                <h2 className="text-white font-bold capitalize mt-10 ">india's</h2>
                <h1 className="text-yellow font-bold uppercase ">top leading provider in</h1>
                <h1 className="text-white font-bold uppercase">the hing import business</h1>
                <p className="text-[24px] text-white font-thin pb-[20px]">For more than 5 decades our company is involved in imports of hing and are currently importing hing from 5 different origins</p>           
                <div className="grid grid-cols-2 gap-x-3 mb-6 w-[85%]  max-sm:w-[100%] max-sm:grid-cols-1  ">
                    <Slider {...settings} className="hidden max-sm:block">
                    {
                        data.map((d) => (
                            <div  className="flex   p-3 rounded-xl mb-3 ">
                                <div className="flex items-center  w-[35%] max-sm:w-[100%] max-sm:px-[25%] max-sm:justify-center">
                                    <img src={d.image} alt="map" className="w-24 h-20 " />
                                </div>
                                <div className="flex flex-col justify-center  w-[65%] max-sm:w-[100%]">
                                    <h2 className="uppercase  text-2xl font-bold">{d.country}</h2>
                                    <p className="capitalize">{d.location}</p>
                                </div>
                            </div>   
                        ))
                    }
                    </Slider>
                </div>

                <div className="grid grid-cols-2 gap-x-3 mb-6 w-[85%]  max-sm:hidden">
                    {
                        data.map((d) => (
                            <div  className="flex   p-3 rounded-xl mb-3 ">
                                <div className="flex items-center  w-[35%] max-sm:w-[100%] max-sm:px-[25%] max-sm:justify-center">
                                    <img src={d.image} alt="map" className="w-24 h-20 " />
                                </div>
                                <div className="flex flex-col justify-center  w-[65%] max-sm:w-[100%]">
                                    <h2 className="uppercase  text-2xl font-bold">{d.country}</h2>
                                    <p className="capitalize">{d.location}</p>
                                </div>
                            </div>   
                        ))
                    }
                </div>
                
                <button className="bg-yellow w-fit text-base font-bold uppercase text-center px-8 py-4 mb-10 hover:bg-white hover:text-red rounded-xl cursor-pointer max-sm:mt-3">discover more</button>
            </div>
            <div className="w-2/5 max-sm:hidden">
                <img src="./images/section1.png" alt="section1image" className="w-[70%] ml-[30%] mt-[60%] " />
            </div>
        </div>
    )
}

export default Section1;