import { useState ,useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Header= () => {
    const [display,setDisplay] = useState("hidden");
    const navigate=useNavigate();

    const handleChange = (e) => {
        if(display ==="hidden"){
            setDisplay("flex");
        }
        else{
            setDisplay("hidden");
        }

        // console.log(e.target.dataset.path);
        navigate(e.target.dataset.path);
    }

    // const logo={
    //     imageSrc: './images/raghu.png',
    //     imageAlt: 'logo',
    //     w:"w-[20%]",
    //     mw:"max-sm:w-[40%]",
    //     };

    const [logo , setLogo] = useState({
        imageSrc: './images/raghu.png',
        imageAlt: 'logo',
        w:"w-[30%]",
        mw:"max-sm:w-[40%]",
        });

    
    // const scollToRef = useRef(null);
    const listenScrollEvent =  (e) => {
        if (window.scrollY <= 800) {
            setLogo({
            imageSrc: './images/raghu.png',
            imageAlt: 'logohuihui',
            w:"w-[30%]",
            mw:"max-sm:w-[40%]",
            })
        } 
        else{
            setLogo({
                imageSrc: './images/raghu_desc.png',
                imageAlt: 'logo',
            w:"w-[60%]",
            mw:"max-sm:w-[80%]",
        })
        console.log("raghu desc : " , logo.imageSrc);
        console.log("raghu desc : " , logo.imageAlt);
        }
        console.log("listen_fun" , logo.imageSrc);
    }
    
    useEffect( () => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className="flex items-center z-20 w-[100%] h-[80px] pl-[12%] pr-[10%] bg-white fixed top-0 z-10  max-sm:px-5 max-sm:py-2 ">
            <div className="w-2/5 max-sm:w-4/5">
                <img src={logo.imageSrc} className={`${logo.w} ${logo.mw}`}  alt="logo"/>
            </div>
            <div className="hidden max-sm:flex max-sm:justify-end w-[20%]">
                <img src="./images/Hamburger_icon.svg" alt="icon" className="max-sm:w-[33%]" onClick={handleChange} />
            </div>
            <ul className={`flex items-center justify-end gap-10 text-lg list-none w-3/5 max-sm:${display} max-sm:text-xl max-sm:flex-col max-sm:absolute max-sm:top-[100%] max-sm:w-[100%] max-sm:-ml-5 max-sm:bg-yellow max-sm:gap-0`}>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange} data-path='/' >Home</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange} data-path='/About' >About Us</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange} data-path='/Process' >Process</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white" onClick={handleChange} data-path='/Gallery'>Gallery</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-white max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white" onClick={handleChange} data-path='/Brand'>Our Brands</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:w-[100%] max-sm:text-center" onClick={handleChange} data-path='/Contact' >Contact Us</li>
            </ul>
        </div>
    )
}

export default Header;