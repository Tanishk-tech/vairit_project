const Section9 = () => {
    return (
        <div className="bg-grey pl-[12%] pr-[8%] pt-[6%] pb-[3%] flex border-b max-sm:flex max-sm:px-4 max-sm:flex-col" id="s9">
            <div className="flex flex-col w-[50%] max-sm:w-[100%] max-sm:items-center max-sm:text-center">
                <img src="./images/Raghuji.png" alt="logo" className="pb-3 w-[25%] h-[50%]"/>
                <p className="pb-5 border-b ">Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta,quam ut finibus ultrices</p>
                <div className="flex pt-3">
                    <img src="./images/facebook.svg" alt="media" className="pr-2" />
                    <img src="./images/twitter.svg" alt="media" className="pr-2" />
                    <img src="./images/youtube.svg" alt="media" className="pr-2" />
                    <img src="./images/insta.svg" alt="media" className="pr-2" />
                </div>
            </div>
            <div className="flex flex-col w-[20%] pl-16 max-sm:w-[100%] max-sm:px-0 max-sm:text-center max-sm:pt-6">
                <h3 className="text-red capitalize max-sm:text-2xl ">useful links</h3>
                <ul className="max-sm:text-xl">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Process</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="flex flex-col w-[30%] pl-16 max-sm:w-[100%] max-sm:px-0 max-sm:text-center max-sm:pt-6">
                <h3 className="text-red capitalize max-sm:text-2xl">Contact info</h3>
                <ul className="max-sm:text-xl">
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