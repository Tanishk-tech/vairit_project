import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section1 = () => {

    useEffect(() => {
        AOS.init({ 
            duration: 1000,
            disable: window.innerWidth < 1024,
            once:true,
        });
        AOS.refresh();
    }, []);

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

    const [modal,setModal] = useState("none");
    const [country , setCountry]= useState("afghanistan");
    const [location , setLocation]= useState("watani safed");
    const [image , setImage]= useState("./images/afgan.png");
    // let data2=
    //     {
    //         country : 'afghanistan',
    //         location: 'watani safed',
    //         image : './images/afgan.png' 
    //     };

    const handlemodal= (event) => {
        modal==='none' ? setModal("block") : setModal("none");

        if(event.currentTarget.lastChild != null || event.currentTarget.firstChild !=null ){
            setCountry(event.currentTarget.lastChild.firstChild.textContent);
            setLocation(event.currentTarget.lastChild.lastChild.textContent);
            setImage(event.currentTarget.firstChild.firstChild.src);
        }
        // if(event.currentTarget.lastChild != null || event.currentTarget.firstChild !=null ){
            
        //     console.log(event.target);
        //     console.log(event.currentTarget.firstChild);
        //     console.log(event.currentTarget.lastChild);
        //     // console.log(event.currentTarget.lastChild.lastChild.textContent);
    
        //     data2.country=event.currentTarget.lastChild.firstChild.textContent;
        //     data2.location=event.currentTarget.lastChild.lastChild.textContent;
        //     data2.image=event.currentTarget.firstChild.firstChild.src;
    
        //     console.log(data2);
        //     console.log(data2.country);
        // }
    }


    return (
        <div className="section1 relative flex bg-red pl-[12%] pt-[10%]  max-sm:flex-col-reverse max-sm:px-4" id="s1" >
            <div className="flex flex-col w-3/5 text-white max-sm:w-[100%] max-sm:text-center max-sm:items-center">
                <h2 className="text-white text-xl font-bold capitalize pl-3 pb-1  max-sm:text-2xl ">india's</h2>
                <h1 className="text-yellow text-4xl font-bold capitalize pl-3  pb-1 max-sm:text-4xl max-sm:leading-snug  ">Top leading provider in</h1>
                <h1 className="text-white text-4xl font-bold capitalize pl-3  pb-1 max-sm:text-4xl max-sm:leading-snug ">The hing import business</h1>
                <p className="text-xl text-white font-thin pr-[30%] pl-3  max-sm:text-xl max-sm:pr-0 ">For more than 5 decades our company is involved in imports of hing and are currently importing hing from 5 different origins</p>           
                <div className="grid grid-cols-2 gap-x-3 mb-6 w-[85%]  max-sm:w-[100%] max-sm:grid-cols-1  ">
                    <Slider {...settings} className="hidden max-sm:block">
                    {
                        data.map((d) => (
                            <div  className="flex   p-3 rounded-xl mb-3 " >
                                <div className="flex items-center  w-[35%] max-sm:w-[100%] max-sm:px-[25%] max-sm:justify-center">
                                    <img src={d.image} alt="map" className="w-24 h-20 " />
                                </div>
                                <div className="flex flex-col justify-center  w-[65%] max-sm:w-[100%]">
                                    <h2 className="capitalize  text-2xl font-bold">{d.country}</h2>
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
                            <div  className="flex   p-3 rounded-xl mb-3 cursor-pointer " onClick={handlemodal} data-aos="fade-left">
                                <div className="flex items-center  w-[35%] max-sm:w-[100%] max-sm:px-[25%] max-sm:justify-center">
                                    <img src={d.image} alt="map" className="w-24 h-20 cursor-pointer " />
                                </div>
                                <div className="flex flex-col justify-center  w-[65%] max-sm:w-[100%]">
                                    <h2 className="capitalize  text-2xl font-bold">{d.country}</h2>
                                    <p className="capitalize">{d.location}</p>
                                </div>
                            </div> 
                            
                        ))
                    }
                    <div className=" w-full h-full z-4 pt-1/20  bg-grey_blur  absolute top-0 left-0" style={{display: modal}}>
                        <div className=" animate-[modal_0.5s_ease-in-out]  w-1/4 h-1/3 bg-white   relative top-[40%] left-[40%] flex flex-col items-center " >
                            <img className='self-end mt-2 mr-2 mb-8 w-4  hover:rotate-[90deg] duration-500' onClick={handlemodal} src='../images/close.png' alt='close' />
                            <div className="flex items-center pb-3 pt-[10%] max-sm:w-[100%] max-sm:px-[25%] max-sm:justify-center">
                                <img src={image} alt="map" className="w-24 h-20 " />
                            </div>
                            <div className="flex flex-col justify-center text-center   max-sm:w-[100%]">
                                <h2 className="capitalize text-black text-2xl font-bold  ">{country}</h2>
                                <p className="capitalize text-black">{location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a  href="https://thepurehing.com/"><button className="bg-yellow w-fit text-base font-bold  text-center capitalize px-8 py-4 ml-3 mb-10 hover:bg-white hover:text-red rounded-xl cursor-pointer max-sm:mt-3 max-sm:px-4 max-sm:py-2 max-sm:text-sm">discover more</button></a>
            </div>
            <div className="w-2/5 flex flex-col items-center max-sm:w-[100%] max-sm:pt-[20%] " >
                <img src="./images/50_years.png"  alt="50years" className="w-[40%] mb-12" data-aos="flip-left" />
                <img src="./images/section1.png" alt="section1image" className="w-[70%] ml-[30%] max-sm:hidden " data-aos="fade-left" />
            </div>
        </div>
    )
}

export default Section1;