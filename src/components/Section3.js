import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = () => {
    const data = [
        {
            value : 'abc' ,
            img : './images/rock1.png',
        },
        {
            value : 'def' ,
            img : './images/rock2.png',
        },
        {
            value : 'hij' ,
            img : './images/rock3.png',
        },
        {
            value : 'klm' ,
            img : './images/rock4.png',
        },
        {
            value : 'abc' ,
            img : './images/rock1.png',
        },
        {
            value : 'def' ,
            img : './images/rock2.png',
        },
        {
            value : 'hij' ,
            img : './images/rock3.png',
        },
        {
            value : 'klm' ,
            img : './images/rock4.png',
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <div className="bg-red flex flex-col items-center w-[100%] py-20">
            <p className="text-white uppercase">our products</p>
            <h1 className="text-white capitalize">explore our the food of the gods</h1>
            <div className=" w-3/4 m-auto">
                <Slider {...settings}>
                {
                    data.map((d) => (
                        <div className="h-100 relative">
                            <div className=" h-80 mt-10 transition duration-150 ease-out hover:ease-in hover:-translate-y-6 ">
                                <img src={d.img} alt="rocks" className="rounded-xl" />
                                <div className="absolute w-[100%] h-[100%]  top-0 left-0 opacity-0 transition duration-150 ease-out hover:opacity-100 hover:ease-in">
                                    <p className=" text-white absolute top-[75%] left-[30%] ">{d.value}</p>
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