const Header= () => {
    return (
        <div className="flex items-center h-[80px] pl-[10%]">
            <div className="w-2/4">
                <img src="./images/Raghunath.png" className="w-1/10"  alt="logo"/>
            </div>
            <ul className="flex items-center gap-[40px] list-none w-2/4 ">
                <li className="hover:header-hover">Home</li>
                <li className="hover:header-hover ">About Us</li>
                <li className="hover:header-hover">Process</li>
                <li className="hover:header-hover">Gallery</li>
                <li className="hover:header-hover">Contact Us</li>
            </ul>
        </div>
    )
}

export default Header;