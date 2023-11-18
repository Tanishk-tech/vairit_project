import Header from "./Header";

const Browse = () =>{
    return (
        <div>
            <Header />
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase">browse us</h1>
            </div>
        </div>
    )
}

export default Browse ;