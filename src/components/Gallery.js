import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";
import ScrollToTop from "./ScrollToTop";
import 'video-react/dist/video-react.css';
import { Player } from "video-react";

const Gallery= () =>{

    const data=[
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
        {
            image: './images/rock1.png'
        },
        
    ]

    return (
        <div className="bg-red">
            <ScrollToTop />
            <Header/>
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-red font-bold absolute bg-white_blur top-[55%] w-full text-center uppercase max-sm:text-3xl max-sm:top-[57%]">Gallery</h1>
            </div> 
            <div className="grid grid-cols-4 gap-8 py-[4%] px-[3%] max-sm:grid-cols-2">
                {
                    data.map((d) =>(
                        <div>
                            <img src={d.image} alt="hing Gallery" className="w-full" />
                        </div>
                    ))
                }
            </div>
            <div className="pb-[4%] px-[3%]">
                <Player autoPlay startTime={3} >
                    <source src="./images/demoVedio.mp4" />
                </Player>
            </div>
            <div className="grid grid-cols-4 gap-8 py-[4%] px-[3%] max-sm:grid-cols-2">
                {
                    data.map((d) =>(
                        <div>
                            <img src={d.image} alt="hing Gallery" className="w-full" />
                        </div>
                    ))
                }
            </div>
            <Section9/>
            <Section10/>
        </div>
    )
}

export default Gallery;