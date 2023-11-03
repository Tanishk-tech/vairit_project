const Section7 = () => {
    return (
        <div className="flex  py-[6%]">
            <div className="w-[50%]">
                <img src="./images/book.png" alt="book" />
            </div>
            <div className="flex flex-col justify-center w-[50%]">
                <h2 className="text-5xl text-yellow uppercase pb-4 font-bold">our brochure</h2>
                <p className="pb-6">We welcome you to download and peruse our business's e-Brochure for an in depth look at your business</p>
                <span className="bg-red w-fit text-white text-base font-bold uppercase text-center  px-8  py-4 hover:bg-yellow hover:text-red rounded-xl cursor-pointer ">view more</span>
            </div>
        </div>
    )
}

export default Section7 ;