const Section9 = () => {
    return (
        <div className="pl-[12%] pr-[8%] pt-[6%] pb-[3%] flex border-b" id="s9">
            <div className="flex flex-col w-[50%]">
                <img src="./images/Raghunath.png" alt="logo" className="pb-3 w-24 h-20"/>
                <p className="pb-5 border-b ">Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta,quam ut finibus ultrices</p>
                <div className="flex pt-3">
                    <img src="./images/facebook.svg" alt="media" className="pr-2" />
                    <img src="./images/twitter.svg" alt="media" className="pr-2" />
                    <img src="./images/youtube.svg" alt="media" className="pr-2" />
                    <img src="./images/insta.svg" alt="media" className="pr-2" />
                </div>
            </div>
            <div className="flex flex-col w-[20%] pl-16">
                <h3 className="text-red capitalize ">useful links</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Process</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="flex flex-col w-[30%] pl-16">
                <h3 className="text-red capitalize">Contact info</h3>
                <ul>
                    <li>Phone</li>
                    <p>+880123456789</p>
                    <li>Email</li>
                    <p>needhelp@company.com</p>
                    <li>Address</li>
                    <p>Road No. 8, Niketan, Dhaka, Bangladesh</p>
                </ul>
            </div>

        </div>
    )
}

export default Section9 ;