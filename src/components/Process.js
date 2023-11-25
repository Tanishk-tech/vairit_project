import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./ScrollToTop";

const Process=() =>{
    useEffect(() => {
        AOS.init({ 
            duration: 3000,
            once:true,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="w-[100%]">
            <ScrollToTop />
            <Header/>
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase max-sm:text-3xl">process</h1>
            </div>
            <div className="bg-red text-white px-[6%]" >
                <div className="flex flex-col py-[2%] max-sm:pt-[12%] max-sm:text-center"  >
                    <h1 className="uppercase text-[40px] text-yellow pr-[50%] leading-tight  max-sm:px-0 max-sm:text-3xl max-sm:px-6 " data-aos="flip-up">identifying the plant during april-may</h1>
                    <p className="text-xl mb-6 pr-[20%] max-sm:text-base max-sm:pr-0" data-aos="flip-up" >Hing is extracted from the root of the asafoetida plant, which generally stem during the spring
                    season. The farmers have to recognize the plant and dig around it's root. This has to be done
                    before the stems fall down during May. The adjacent picture shows a mountain with the leaves of
                    the Hing plant visible</p>
                </div>
                <div className="flex pb-[2%] w-[100%] max-sm:flex-col">
                    <div className="w-[60%] flex flex-col max-sm:w-full max-sm:pb-8"  >
                        <img src="./images/process1.jpg" alt="spices" className="w-[25%] h-[50%] ml-[40%] rounded-full mb-[5%] max-sm:w-[40%] max-sm:m-auto" data-aos="zoom-in" />
                        <img src="./images/process2.jpg" alt="spices" className="w-[20%] h-[40%] ml-[50%] rounded-full max-sm:hidden" data-aos="zoom-in" />
                    </div>
                    <div className="w-[40%] max-sm:w-full" >
                        <h1 className="uppercase text-[40px] text-right text-yellow leading-tight  max-sm:px-0 max-sm:text-3xl max-sm:text-center" data-aos="flip-up">extracting the asafoetida</h1>
                        <p className="text-xl mb-6 text-right max-sm:text-base max-sm:text-center" data-aos="flip-up">Beginning mid July, the farmer places small cuts on
                        the root and waits for 1-2 days. Thereafter, the
                        farmer collects the asafoetida that has oozed out
                        and places another cut on the root. This process
                        goes on till mid September. During harvest, a
                        farmer handles 3-4 thousand plants and collects
                        30-50 Kg. asafoetida, depending upon the
                        weather. The picture here shows asafoetida oozing
                        out and being collected by the farmer's knife.</p>
                        <img src="./images/process2.jpg" alt="spices" className="w-[40%] rounded-full  hidden max-sm:block max-sm:m-auto" data-aos="zoom-in"  />
                    </div>
                </div>
                <div className="flex flex-col max-sm:items-center max-sm:text-center max-sm:pt-6"  >
                    <h1 className="uppercase text-[40px] text-yellow pr-[60%] leading-tight  max-sm:px-0 max-sm:text-3xl max-sm:pr-0" data-aos="flip-up">exposing the roots to direct sun</h1>
                    <p className="text-xl mb-6 pr-[30%] max-sm:text-base max-sm:pr-0" data-aos="flip-up">Asafoetida plant's roots are exposed to direct sun for 5- 10 days before the extraction of Hing. This
                    picture here shows a Plant from which
                    Hing extraction is yet to begin</p>
                    <img src="./images/process3.png" alt="spices" className="w-[15%] mb-[5%] ml-[40%]  rounded-full max-sm:ml-0 max-sm:w-[40%]" data-aos="zoom-in"  />
                </div>
                <div className="text-center"  >
                    <h1 className="uppercase text-[40px] text-right text-yellow  leading-tight pb-4 pl-[50%]  max-sm:px-0 max-sm:text-3xl max-sm:text-center max-sm:pl-0" data-aos="flip-up">storing and packing for further export</h1>
                    <p className="text-xl  text-right max-sm:text-base max-sm:text-center max-sm:pl-0" data-aos="flip-up">FURTHER EXPORT</p>
                    <p className="text-xl pb-6 pl-[20%] text-right max-sm:text-base max-sm:text-center max-sm:pl-0" data-aos="flip-up"> By September-end, farmers bring their produce down from the mountains to their homes. From
                    there it is reaches the exporter's godown, where it is checked and re-packed in export-ready cans
                    for being shipped to India.</p>
                </div>
            </div>
            <Section9 />
            <Section10/>
        </div>
    )
}

export default Process ;