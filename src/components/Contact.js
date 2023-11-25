import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./ScrollToTop";

const Contact = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-red">
            <ScrollToTop />
            <Header/>
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase max-sm:text-3xl">contact us</h1>
            </div>
            <div className="flex px-[6%] py-[3%] max-sm:flex-col max-sm:py-[6%]">
                <div className="w-2/5 flex flex-col max-sm:w-full max-sm:pb-6" data-aos="fade-right">
                    <div className="text-white flex mb-6 ">
                        <div className="pr-6 max-sm:pr-8">
                            <img src="./images/address.png"  alt="address" className="border-2 border-solid border-grey_blur p-3 rounded-full max-sm:p-2" />
                        </div>
                        <div>
                            <h3 className="max-sm:text-xl">Address</h3>
                            <p className="max-sm:text-sm">201, 203, 204, 2nd Floor, Plot No 7A,<br/>
                            Sector 19/C, Above Shalimar Hotel,<br/>
                            APMC Market Road, Vashi,<br/>
                            New Mumbai – 400703. INDIA</p>
                        </div>
                    </div>

                    <div className="text-white flex mb-6 ">
                        <div className="pr-6 max-sm:pr-8">
                            <img src="./images/telephone.png"  alt="telephone" className="border-2 border-solid border-grey_blur p-3 rounded-full max-sm:p-2" />
                        </div>
                        <div>
                            <h3 className="capitalize max-sm:text-xl ">give us a call</h3>
                            <p className="max-sm:text-sm ">022 2784 2212 <br/>
                            022 2784 2213</p>
                        </div>
                    </div>
                    <div className="text-white flex ">
                        <div className="pr-6 max-sm:pr-8">
                            <img src="./images/mail.png"  alt="mail" className="border-2 border-solid border-grey_blur p-3 rounded-full max-sm:p-2" />
                        </div>
                        <div>
                            <h3 className="capitalize max-sm:text-xl">email us</h3>
                            <p className="max-sm:text-sm">info@blghing.com<br/>
                            info@khrishika.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 max-sm:w-full" data-aos="fade-up">
                    <h3 className="capitalize text-white mb-6 max-sm:text-center">contact form</h3>
                    <form>
                        <input type="text" placeholder="First Name" name="Fname" className="w-[49%]  mr-[2%] mb-6 p-3 rounded-xl max-sm:w-full" required />
                        <input type="text" placeholder="Last Name" name="Lname" className="w-[49%] p-3 mb-6 rounded-xl  max-sm:w-full" required  /><br/>
                        <input type="tel" placeholder="Contact Number" name="contact" className="w-full  rounded-xl p-3 mb-6" required  /><br/>
                        <input type="email" placeholder="Email" name="email" className="w-full rounded-xl  p-3 mb-6" required  /><br/>
                        <textarea name="comment" rows="8" cols="50" placeholder="Message" className="w-full rounded-xl p-3 mb-6"></textarea>
                        <input type="submit" value="Submit" className=" w-fit text-white text-base font-bold  border-2 border-solid border-yellow rounded-none text-center capitalize px-6 py-2 hover:bg-yellow hover:text-black rounded-xl cursor-pointer max-sm:mt-0 max-sm:px-4 max-sm:py-2 max-sm:text-sm max-sm:ml-[35%]" />
                    </form>
                </div>
            </div>
            <Section9 />
            <Section10 />
        </div>
    )
}

export default Contact;