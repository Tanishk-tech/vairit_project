const Header= () => {
    return (
        <div className="flex items-center h-[80px] pl-[12%] pr-[10%]">
            <div className="w-2/4">
                <img src="./images/Raghunath.png" className="w-[12%]"  alt="logo"/>
            </div>
            <ul className="flex items-center justify-end gap-[40px] list-none w-2/4 ">
                <li className="hover:header-hover cursor-pointer">Home</li>
                <li className="hover:header-hover cursor-pointer ">About Us</li>
                <li className="hover:header-hover cursor-pointer">Process</li>
                <li className="hover:header-hover cursor-pointer">Gallery</li>
                <li className="hover:header-hover cursor-pointer">Contact Us</li>
            </ul>
        </div>
    )
}

export default Header;