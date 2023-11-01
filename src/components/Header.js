const Header= () => {
    return (
        <div className="flex items-center h-[80px] ">
            <div className="w-2/4">
                <img src="./images/Raghunath.png" className="w-1/10 relative left-[30%]"  alt="logo"/>
            </div>
            <ul className="flex items-center gap-[40px] list-none w-2/4 ">
                <li className="hover:text-red-600 hover:underline">Home</li>
                <li className="hover:text-red-600 hover:underline ">About Us</li>
                <li className="hover:text-red-600 hover:underline">Process</li>
                <li className="hover:text-red-600 hover:underline">Gallery</li>
                <li className="hover:text-red-600 hover:underline">Contact Us</li>
            </ul>
        </div>
    )
}

export default Header;