import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";

const Contact = () => {
    return (
        <div className="bg-red">
            <Header/>
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase">contact us</h1>
            </div>
            <div className="flex px-[6%] py-[3%]">
                <div className="w-2/5 flex flex-col">
                    <div className="text-white flex mb-6 ">
                        <div className="pr-6">
                            <img src="./images/address.png"  alt="address" className="border-2 border-solid border-grey_blur p-3 rounded-full" />
                        </div>
                        <div>
                            <h3>Address</h3>
                            <p>201, 203, 204, 2nd Floor, Plot No 7A,<br/>
                            Sector 19/C, Above Shalimar Hotel,<br/>
                            APMC Market Road, Vashi,<br/>
                            New Mumbai – 400703. INDIA</p>
                        </div>
                    </div>

                    <div className="text-white flex mb-6 ">
                        <div className="pr-6">
                            <img src="./images/telephone.png"  alt="telephone" className="border-2 border-solid border-grey_blur p-3 rounded-full" />
                        </div>
                        <div>
                            <h3 className="capitalize">give us a call</h3>
                            <p>022 2784 2212 <br/>
                            022 2784 2213</p>
                        </div>
                    </div>
                    <div className="text-white flex ">
                        <div className="pr-6">
                            <img src="./images/mail.png"  alt="mail" className="border-2 border-solid border-grey_blur p-3 rounded-full" />
                        </div>
                        <div>
                            <h3 className="capitalize">email us</h3>
                            <p>info@blghing.com<br/>
                            info@khrishika.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/5">
                    <h3 className="capitalize text-white mb-6">contact form</h3>
                    <form>
                        <input type="text" placeholder="Name" name="Name" className="w-[45%]  mr-[10%] mb-6 p-3" />
                        <input type="text" placeholder="E-Mail" name="email" className="w-[45%] p-3" /><br/>
                        <input type="text" placeholder="Contact Number" name="contact" className="w-full p-3 mb-6" /><br/>
                        <textarea name="comment" rows="8" cols="50" placeholder="Message" className="w-full p-3 mb-6"></textarea>
                        <input type="submit" value="Submit" className=" w-fit text-white text-base font-bold  border-2 border-solid border-yellow rounded-none text-center capitalize px-6 py-2 hover:bg-yellow hover:text-black rounded-xl cursor-pointer max-sm:mt-3 max-sm:px-4 max-sm:py-2 max-sm:text-sm" />
                    </form>
                </div>
            </div>
            <Section9 />
            <Section10 />
        </div>
    )
}

export default Contact;