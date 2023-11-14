import { useState,useEffect } from "react";

const Header= () => {
    const [display,setDisplay] = useState("hidden");

    const handleChange = () => {
        if(display ==="hidden"){
            setDisplay("flex");
        }
        else{
            setDisplay("hidden");
        }
    }

    const [logo , setLogo] = useState({
        imageSrc: './images/raghuji.png',
        imageAlt: 'logo',
        w:"w-[20%]",
        mw:"max-sm:w-[40%]",
        })
    
    const listenScrollEvent = (e) => {
        if (window.scrollY < 400) {
            setLogo({
            imageSrc: './images/raghuji.png',
            imageAlt: 'logo',
            w:"w-[20%]",
            mw:"max-sm:w-[40%]",
            })
        } else {
            setLogo({
            imageSrc: './images/raghu_desc.png',
            imageAlt: 'logo',
            w:"w-[50%]",
            mw:"max-sm:w-[80%]",
            })
        }
        console.log(logo);
    }

    console.log(logo);
    
    
    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className="flex items-center z-20 w-[100%] h-[80px] pl-[12%] pr-[10%] bg-white fixed top-0 z-10  max-sm:px-5 max-sm:py-2 ">
            <div className="w-1/2 max-sm:w-4/5">
                <img src={logo.imageSrc} className={`${logo.w} ${logo.mw}`}  alt="logo"/>
            </div>
            <div className="hidden max-sm:flex max-sm:justify-end w-[20%]">
                <img src="./images/Hamburger_icon.svg" alt="icon" className="max-sm:w-[33%]" onClick={handleChange} />
            </div>
            <ul className={`flex items-center justify-end gap-10 text-lg list-none w-2/4 max-sm:${display} max-sm:text-2xl max-sm:flex-col max-sm:absolute max-sm:top-[100%] max-sm:w-[100%] max-sm:-ml-5 max-sm:bg-yellow max-sm:gap-0`}>
                <li className="hover:header-hover cursor-pointer max-sm:py-6 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange}><a href="#s1" >Home</a></li>
                <li className="hover:header-hover cursor-pointer max-sm:py-6 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange}><a href="#s6" >About Us</a></li>
                <li className="hover:header-hover cursor-pointer max-sm:py-6 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange}><a href="#s5" >Process</a></li>
                <li className="hover:header-hover cursor-pointer max-sm:py-6 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white" onClick={handleChange}><a href="#s3">Gallery</a></li>
                <li className="hover:header-hover cursor-pointer max-sm:py-6 max-sm:w-[100%] max-sm:text-center" onClick={handleChange}><a href="#s9">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Header;