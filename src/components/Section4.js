import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section4 = () => {

    const data = [
        {
            value:'hing powder',
            text : `Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry s standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged`,
            image : './images/hing.png',
        },
        {
            value:'hing powder',
            text : `Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry s standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged`,
            image : './images/hing.png',
        },
        {
            value:'hing powder',
            text : `Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry s standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged`,
            image : './images/hing.png',
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false, 
        pauseOnHover: true,
        cssEase: 'linear',
        waitForAnimate: false
    };

    return (
        <div style={{display: "flex"}} className=" flex-col w-[100%] px-[12%] py-[6%] items-center section4 max-sm:px-6" id="4">
            <h1 className="text-red capitalize pb-12 font-bold max-sm:pb-6">manufactured hing</h1>
            <div className="w-[100%] bg-yellow">
            <Slider {...settings}>
                {
                    data.map((d) => (
                        <div className="bg-yellow">
                            <div className="flex bg-yellow rounded-xl p-20 cursor-grab max-sm:flex-col-reverse max-sm:px-6 max-sm:items-center max-sm:text-center">
                                <div className="flex flex-col w-2/3 pr-10 justify-center max-sm:w-[100%] max-sm:p-0">
                                    <h1 className="uppercase font-bold">{d.value}</h1>
                                    <p className="text-justify max-sm:text-xl max-sm:text-center">{d.text}</p>
                                </div>
                                <div className="w-1/3">
                                    <img src={d.image} alt='hing' />
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

export default Section4;