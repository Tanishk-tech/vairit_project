const Header= () => {
    return (
        <div className="flex items-center h-[80px] ">
            <div className="w-2/4">
                <a href="#"><img src="./images/Raghunath.png" className="w-1/10 relative left-[30%]" /></a>
            </div>
            <ul className="flex items-center gap-[40px] list-none w-2/4 ">
                <li className="hover:text-red-600 hover:underline"><a href="#">Home</a></li>
                <li className="hover:text-red-600 hover:border-solid border-2 "><a href="#">About Us</a></li>
                <li className="underline decoration-1"><a href="#">Process</a></li>
                <li className="hover:text-red-600:decoration-1"><a href="#">Gallery</a></li>
                <li className="hover:text-red-600:decoration-1"><a href="#">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Header;