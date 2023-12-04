import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./ScrollToTop";

const Process = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="w-[100%]">
            <ScrollToTop />
            <Header />
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase max-sm:text-3xl max-sm:top-[57%]">process</h1>
            </div>
            <div className="bg-red text-white px-[6%]" >
                <div className="flex flex-col py-[2%] max-sm:pt-[6%] max-sm:text-center"  >
                    <h1 className="uppercase text-[40px] text-yellow pr-[50%] leading-tight  max-sm:px-0 max-sm:text-2xl" data-aos="flip-up">IDENTIFYING THE PLANT</h1>
                    <p className="text-xl mb-6 pr-[20%] max-sm:text-base max-sm:pr-0" data-aos="flip-up" >During April and May, asafoetida plants emerge, their roots containing hing. Recognition is key; spotting its distinct appearance aids farmers in harvesting before May's stems fall. The plant's image displays recognizable leaves atop a mountain. <br></br><br></br>
                        A. Identifying Asafoetida
                        In spring, recognizing asafoetida amidst nature's backdrop initiates the harvesting. <br></br>
                        B. Delicate Root Digging
                        Preserving the hing-rich root demands careful excavation using traditional techniques.</p>
                </div>
                <div className="flex pb-[2%] w-[100%] max-sm:flex-col">
                    <div className="w-[60%] flex flex-col max-sm:w-full max-sm:pb-8"  >
                        <img src="./images/process1.jpg" alt="spices" className="w-[25%] h-[50%] ml-[40%] rounded-full mb-[5%] max-sm:w-[40%] max-sm:m-auto" data-aos="zoom-in" />
                        <img src="./images/process2.jpg" alt="spices" className="w-[20%] h-[40%] ml-[50%] rounded-full max-sm:hidden" data-aos="zoom-in" />
                    </div>
                    <div className="w-[40%] max-sm:w-full" >
                        <h1 className="uppercase text-[40px] text-right text-yellow leading-tight  max-sm:px-0 max-sm:text-2xl max-sm:text-center" data-aos="flip-up">EXTRACTING THE ASAFOETIDA</h1>
                        <p className="text-xl mb-6 text-right max-sm:text-base max-sm:text-center" data-aos="flip-up">From mid-July to mid-September, the farmer performs sequential incisions on the root, waiting for resin to seep out before making additional cuts. This method yields 30–50 kg of asafoetida from 3–4 thousand plants, varying with weather conditions.

                            A. Incising the Root
                            The extraction begins as the farmer skillfully makes cuts on the plant's root, optimizing resin collection.
                            B. Gathering Resin
                            Post-incisions, the precious asafoetida resin emerges, meticulously gathered by farmers to minimize waste and maximize yield.</p>
                        <img src="./images/process2.jpg" alt="spices" className="w-[40%] rounded-full  hidden max-sm:block max-sm:m-auto" data-aos="zoom-in" />
                    </div>
                </div>
                <div className="flex flex-col max-sm:items-center max-sm:text-center max-sm:pt-6"  >
                    <h1 className="uppercase text-[40px] text-yellow pr-[60%] leading-tight  max-sm:px-0 max-sm:text-2xl max-sm:pr-0" data-aos="flip-up">EXPOSING THE ROOTS TO DIRECT SUN</h1>
                    <p className="text-xl mb-6 pr-[30%] max-sm:text-base max-sm:pr-0" data-aos="flip-up">The asafoetida roots undergo 5–10 days of direct sun exposure before hing extraction, vital for resin preparation.

                        A. Preservation via Sun Drying
                        Direct sunlight on asafoetida roots preserves resin, enriching its flavor—a traditional method for enhancing spice depth.
                        B. Duration Balance
                        Careful balance in sun exposure duration is crucial; excessive exposure can impact the taste and quality of the end product.</p>
                    <img src="./images/process3.png" alt="spices" className="w-[15%] mb-[5%] ml-[40%]  rounded-full max-sm:ml-0 max-sm:w-[40%]" data-aos="zoom-in" />
                </div>
                <div className="text-center"  >
                    <h1 className="uppercase text-[40px] text-right text-yellow  leading-tight pb-4 pl-[50%]  max-sm:px-0 max-sm:text-2xl max-sm:text-center max-sm:pl-0" data-aos="flip-up">STORING AND PACKING FOR FURTHER EXPORT</h1>
                    {/* <p className="text-xl  text-right max-sm:text-base max-sm:text-center max-sm:pl-0" data-aos="flip-up">FURTHER EXPORT</p> */}
                    <p className="text-xl pb-6 pl-[20%] text-right max-sm:text-base max-sm:text-center max-sm:pl-0" data-aos="flip-up"> By September-end, farmers bring their produce down from the mountains to their homes. From there, it reaches the exporter's godown, where it is checked and repacked in export-ready cans for being shipped to India.
                        A. The Final Harvest
                        The asafoetida is harvested and brought down from the hilly regions to be processed for distribution.
                        B. Quality Checks
                        Before exporting, the asafoetida goes through rigorous quality checks to ensure that it meets the required standards for consumption.
                        C. Export-Ready Packaging
                        The precious spice is packaged in a way that preserves its quality during transit, ensuring it reaches its destination in prime condition.</p>
                </div>
            </div>
            <Section9 />
            <Section10 />
        </div>
    )
}

export default Process;