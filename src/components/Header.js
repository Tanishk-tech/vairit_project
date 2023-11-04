const Header= () => {
    return (
        <div className="flex items-center h-[80px] pl-[12%] pr-[10%] max-sm:bg-yellow  ">
            <div className="w-2/4">
                <img src="./images/Raghunath.png" className="w-[12%]"  alt="logo"/>
            </div>
            <ul className="flex items-center justify-end gap-[40px] list-none w-2/4 ">
                <li className="hover:header-hover cursor-pointer"><a href="#s1" >Home</a></li>
                <li className="hover:header-hover cursor-pointer "><a href="#s6" >About Us</a></li>
                <li className="hover:header-hover cursor-pointer"><a href="#s5" >Process</a></li>
                <li className="hover:header-hover cursor-pointer"><a href="#s3">Gallery</a></li>
                <li className="hover:header-hover cursor-pointer"><a href="#s9">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Header;