import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";
import ScrollToTop from "./ScrollToTop";
// import 'video-react/dist/video-react.css';
// import { Player } from "video-react";

const Gallery= () =>{

    return (
        <div className="bg-red">
            <ScrollToTop />
            <Header/>
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-red font-bold absolute bg-white_blur top-[55%] w-full text-center uppercase max-sm:text-3xl max-sm:top-[57%]">Gallery</h1>
            </div> 
            {/* <div className="grid grid-cols-4 gap-8 py-[4%] px-[3%] max-sm:grid-cols-2">
                {
                    data.map((d) =>(
                        <div>
                            <img src={d.image} alt="hing Gallery" className="w-full" />
                        </div>
                    ))
                }
            </div> */}
            {/* <div className="pb-[4%] px-[3%]">
                <Player autoPlay startTime={3} width={200} height={340} >
                    <source src="./images/demoVedio.mp4" />
                </Player>
            </div> */}
            {/* <div className="grid grid-cols-4 gap-8 py-[4%] px-[3%] max-sm:grid-cols-2">
                {
                    data.map((d) =>(
                        <div>
                            <img src={d.image} alt="hing Gallery" className="w-full" />
                        </div>
                    ))
                }
            </div> */}
            <div className="flex-col px-[3%] py-[4%]">
                <div className="flex  gap-6 mb-6">
                    <div className="w-3/4 max-sm:w-1/2">
                        <img src="./images/rock1.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                    <div className="w-1/4 max-sm:w-1/2">
                        <img src="./images/rock1.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="w-1/4 max-sm:hidden">
                        <img src="./images/rock2.png" alt="gallerydummy" className="w-full h-[320px]" />
                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <img src="./images/rock2.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                    <div className="w-1/4 max-sm:hidden">
                        <img src="./images/rock2.png" alt="gallerydummy" className="w-full h-[320px]" />
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="w-1/2">
                        <img src="./images/rock3.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                    <div className="w-1/2">
                        <img src="./images/rock3.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="w-1/3 max-sm:hidden">
                        <img src="./images/rock4.png" alt="gallerydummy" className="w-full h-[320px]" />
                    </div>
                    <div className="w-1/3 max-sm:w-full">
                        <img src="./images/rock4.png" alt="gallerydummy" className="w-full h-[320px]" />
                    </div>
                    <div className="w-1/3 max-sm:hidden">
                        <img src="./images/rock4.png" alt="gallerydummy" className="w-full h-[320px]" />
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="w-1/2">
                        <img src="./images/rock3.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                    <div className="w-1/2">
                        <img src="./images/rock3.png" alt="gallerydummy" className="w-full h-[320px] max-sm:h-[200px]" />
                    </div>
                </div>
            </div>
            <Section9/>
            <Section10/>
        </div>
    )
}

export default Gallery;