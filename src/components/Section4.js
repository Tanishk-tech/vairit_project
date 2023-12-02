import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    const data = [
        {
            value:'Hing Powder',
            text: `Our asafoetida powder is a testament to quality, meticulously processed to ensure a consistent, potent flavor profile. Sourced from premium ingredients, it enriches dishes with its distinct savory essence. Perfect for both Indian and international cuisines, this finely ground powder guarantees culinary perfection with every sprinkle.`,
            image: './images/hing_bowl-modified.png',
        },
        {
            value:'Hing Khada',
            text: `Experience the robust, pungent notes of our Hing Khada, carefully preserved in chunk form. These sizable asafoetida pieces offer a strong aromatic kick, enhancing the taste of your recipes. Ideal for tempering, its concentrated flavor elevates curries, dals, and other savory dishes, leaving a lasting impression on your palate`,
            image: './images/hingdhana.png',
        },
        {
            value:'Hing Dana',
            text: `Our Hing Dana comprises small granules packed with intense asafoetida flavor. These tiny yet powerful morsels blend effortlessly into various cuisines, enhancing the taste without overpowering other ingredients. Convenient and versatile, they serve as a valuable addition to your spice collection, amplifying the essence of your culinary creations.`,
            image: './images/hingdana.png',
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
        autoplaySpeed: 3000,
        pauseOnFocus: false, 
        pauseOnHover: true,
        cssEase: 'linear',
        waitForAnimate: false
    };

    return (
        <div style={{display: "flex"}} className=" flex-col w-[100%] px-[12%] pt-[2%]  bg-grey items-center section4 max-sm:px-6" id="4">
            <h1 className="text-red text-4xl capitalize pb-4 font-bold max-sm:mt-3 max-sm:text-2xl max-sm:text-center">manufactured hing</h1>
            <div className="w-[100%] bg-yellow" data-aos="fade-down">
            <Slider {...settings}>
                {
                    data.map((d) => (
                        <div className="bg-yellow" data-aos="fade-up">
                            <div className="flex bg-yellow rounded-xl p-20 cursor-grab max-sm:flex-col-reverse max-sm:px-6 max-sm:py-8 max-sm:items-center max-sm:text-center">
                                <div className="flex flex-col w-2/3 pr-10 justify-center max-sm:w-[100%] max-sm:p-0">
                                    <h1 className="text-4xl capitalize font-bold max-sm:text-2xl max-sm:leading-tight">{d.value}</h1>
                                    <p className="text-base text-justify max-sm:text-xl max-sm:text-center max-sm:text-base max-sm:pr-0">{d.text}</p>
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