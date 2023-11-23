import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section9 = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    const navigate =useNavigate();

    const handleChange = (e) => {
        // console.log(e.target.dataset.path);
        navigate(e.target.dataset.path);
    }

    return (
        <div className="bg-grey pl-[12%] pr-[8%] pt-[6%] pb-[3%] flex border-b max-sm:flex max-sm:px-4 max-sm:flex-col" id="s9">
            <div className="flex flex-col w-[50%] max-sm:w-[100%] max-sm:items-center max-sm:text-center">
                <img src="./images/Raghu.png" alt="logo" className="pb-3 w-[40%] h-[50%]" data-aos="flip-up" />
                <p className="pb-5 border-b " data-aos="fade-up">Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta,quam ut finibus ultrices</p>
                <div className="flex pt-3" data-aos="fade-up">
                    <img src="./images/facebook.svg" alt="media" className="pr-2" />
                    <img src="./images/twitter.svg" alt="media" className="pr-2" />
                    <img src="./images/youtube.svg" alt="media" className="pr-2" />
                    <img src="./images/insta.svg" alt="media" className="pr-2" />
                </div>
            </div>
            <div className="flex flex-col w-[20%] pl-16 max-sm:w-[100%] max-sm:px-0 max-sm:text-center max-sm:pt-6" data-aos="fade-up">
                <h3 className="text-red capitalize max-sm:text-2xl ">useful links</h3>
                <ul className="max-sm:text-xl">
                    <li className="curser-pointer hover:text-red hover:underline" onClick={handleChange} data-path='/'>Home</li>
                    <li className="curser-pointer hover:text-red hover:underline" onClick={handleChange} data-path='/About'>About Us</li>
                    <li className="curser-pointer hover:text-red hover:underline" onClick={handleChange} data-path='/Process'>Process</li>
                    {/* <li className="curser-pointer hover:text-red hover:underline" onClick={handleChange} data-path='/Gallery'>Gallery</li> */}
                    <li className="curser-pointer hover:text-red hover:underline" onClick={handleChange} data-path='/Brand'>Our Brands</li>
                    <li className="curser-pointer hover:text-red hover:underline" onClick={handleChange} data-path='/Contact'>Contact Us</li>
                </ul>
            </div>
            <div className="flex flex-col w-[30%] pl-16 max-sm:w-[100%] max-sm:px-0 max-sm:text-center max-sm:pt-6" data-aos="fade-up">
                <h3 className="text-red capitalize max-sm:text-2xl">Contact info</h3>
                <ul className="max-sm:text-xl">
                    <li>Phone</li>
                    <p ><a href="tel:+880123456789" className="curser-pointer hover:text-red hover:underline">+880123456789</a></p>
                    <li>Email</li>
                    <p><a href="mailto:needhelp@company.com" className="curser-pointer hover:text-red hover:underline">needhelp@company.com</a></p>
                    <li>Address</li>
                    <p>Road No. 8, Niketan, Dhaka, Bangladesh</p>
                </ul>
            </div>

        </div>
    )
}

export default Section9 ;