import {  useState  } from "react";
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

    const logo={
        imageSrc: './images/raghu.png',
        imageAlt: 'logo',
        w:"w-[50%]",
        mw:"max-sm:w-[55%]",
        };

    
    // const [logo , setLogo] = useState({
    //     imageSrc: './images/raghu.png',
    //     imageAlt: 'logo',
    //     w:"w-[30%]",
    //     mw:"max-sm:w-[40%]",
    //     });

    //     useEffect( () => {
    //         window.addEventListener('scroll',listenScrollEvent)
    //     }, []);
    
    
    // const scollToRef = useRef(null);
    // const listenScrollEvent =  (e) => {
    //     if (window.scrollY <= 800) {
    //         setLogo({
    //         imageSrc: './images/raghu.png',
    //         imageAlt: 'logohuihui',
    //         w:"w-[30%]",
    //         mw:"max-sm:w-[40%]",
    //         })
    //     } 
    //     else{
    //         setLogo({
    //             imageSrc: './images/raghu_desc.png',
    //             imageAlt: 'logo',
    //         w:"w-[60%]",
    //         mw:"max-sm:w-[80%]",
    //     })
    //     console.log("raghu desc : " , logo.imageSrc);
    //     console.log("raghu desc : " , logo.imageAlt);
    //     }
    //     console.log("listen_fun" , logo.imageSrc);
    // }
    
    

    // useEffect(() => {
    //     const listenScrollEvent = async (e) => {
    //         if (window.scrollY <= 600) {
    //             setLogo({
    //             imageSrc: './images/raghu.png',
    //             imageAlt: 'logohuihui',
    //             w:"w-[30%]",
    //             mw:"max-sm:w-[40%]",
    //             })
    //         } 
    //         else{
    //             await  setLogo({
    //                 imageSrc: './images/raghu_desc.png',
    //                 imageAlt: 'logo',
    //                 w:"w-[30%]",
    //                 mw:"max-sm:w-[80%]",
    //         })

            
    //         console.log("raghu desc : " , logo.imageSrc);
    //         console.log("raghu desc : " , logo.imageAlt);
    //         }
    //         console.log("listen_fun" , logo.imageSrc);
    //     }
    //     window.addEventListener('scroll', listenScrollEvent);
    // },[])

    return (
        <div className="flex items-center z-20 w-[100%] h-[120px] pl-[12%] pr-[4%] bg-white fixed top-0 z-10  max-sm:px-5 max-sm:py-2 max-sm:h-[100px]">
            <div className="w-1/3 max-sm:w-4/5">
                <img src={logo.imageSrc} className={`${logo.w} ${logo.mw}`}  alt="logo"/>
            </div>
            <div className="hidden max-sm:flex max-sm:justify-end w-[20%]">
                <img src="./images/Hamburger_icon.svg" alt="icon" className="max-sm:w-[33%]" onClick={handleChange} />
            </div>
            <ul className={`flex items-center justify-end gap-10 text-lg list-none w-2/3 max-sm:${display} max-sm:text-xl max-sm:flex-col max-sm:absolute max-sm:top-[100%] max-sm:w-[100%] max-sm:-ml-5 max-sm:bg-white max-sm:gap-0`}>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-t max-sm:border-yellow max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange} data-path='/' >Home</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-yellow max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange} data-path='/About' >About Us</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-yellow max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white " onClick={handleChange} data-path='/Process' >Process</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-yellow max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white" onClick={handleChange} data-path='/Gallery'>Gallery</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-yellow max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white" onClick={handleChange} data-path='/Brand'>Our Brands</li>
                <li className="hover:header-hover cursor-pointer max-sm:py-2 max-sm:border-b max-sm:border-yellow max-sm:w-[100%] max-sm:text-center max-sm:hover:border-white hidden max-sm:block" onClick={handleChange} data-path='/Contact'>Contact Us</li>
                <li className="cursor-pointer border-2 border-solid border-yellow text-center capitalize px-6 py-3 hover:bg-yellow hover:text-white rounded-xl cursor-pointer max-sm:mt-3 max-sm:px-4 max-sm:py-2 max-sm:text-sm max-sm:w-[100%] max-sm:text-center max-sm:hidden" onClick={handleChange} data-path='/Contact' >Contact Us</li>
            </ul>
        </div>
    )
}

export default Header;