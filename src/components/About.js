import Header from "./Header";
import Section9 from "./Section9";
import Section10 from "./Section10";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ 
            duration: 2500,
            once:true,
        });
        AOS.refresh();
    }, []);

    const data=[
        {
            image:'./images/spice1.webp',
        },
        {
            image:'./images/spice2.jpg',
        },
        {
            image:'./images/spice3.jpg',
        },
        {
            image:'./images/spice4.jpeg',
        },
    ]

    return (
        <div className="w-[100%]">
            <Header/>
            <div className="relative w-full">
                <img src="./images/contact_back.jpg" alt="hing" className="w-full h-[400px]" />
                <h1 className="text-white font-bold absolute top-[50%] w-full text-center uppercase max-sm:text-3xl">about us</h1>
            </div>
            <div className="bg-red px-[8%] text-center text-white max-sm:pt-[16%]">
                <div className="py-10 max-sm:pb-2" data-aos="fade-up" >
                    {/* <h1 className="text-[40px] w-fit m-auto px-10 uppercase border-solid border-b-4 border-yellow max-sm:text-3xl">About us</h1> */}
                    <p className="text-xl py-4 max-sm:text-base">At [Your Brand Name], we embark on a journey fueled by passion and innovation. With a relentless
                        commitment to excellence, we merge creativity and cutting-edge technology to redefine standards.
                        Our foundation is built on a belief in the power of possibilities. From inception, we set out to inspire
                        and transform—fusing imagination with expertise to craft unique experiences. We are more than a
                        brand; we are a testament to ingenuity. Rooted in a culture of integrity and forward-thinking, we
                        embrace challenges as opportunities for growth. With a dedicated team driving our vision, we invite
                        you to explore a world where boundaries fade, and the extraordinary becomes the norm. Welcome to
                        [Your Brand Name], where innovation knows no limits.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-20  max-sm:gap-0 max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center ">
                        {
                            data.map((d) => (
                                <img src={d.image} alt="spices" className="rounded-[50%] w-[20%] h-[20%] px-4 max-sm:w-4/5 max-sm:h-4/5 " data-aos="flip-left"  />
                            ))
                        }
                    </div>
                    <p className="text-xl py-4 max-sm:text-base" data-aos="fade-up" >At [Your Brand Name], we embark on a journey fueled by passion and innovation. With a relentless
                    commitment to excellence, we merge creativity and cutting-edge technology to redefine standards. Our
                    foundation is built on a belief in the power of possibilities. From inception, we set out to inspire and
                    transform—fusing imagination with expertise to craft unique experiences. We are more than a brand; we are
                    a testament to ingenuity. Rooted in a culture of integrity and forward-thinking, we embrace challenges as
                    opportunities for growth. With a dedicated team driving our vision, we invite you to explore a world where
                    boundaries fade, and the extraordinary becomes the norm. Welcome to [Your Brand Name], where
                    innovation knows no limits.</p>
                </div>
                <div className="pt-10" data-aos="fade-up" >
                    <h1 className="text-[40px] w-fit m-auto px-10 uppercase border-solid border-b-4 border-yellow max-sm:px-0 max-sm:text-3xl ">seeds of a long journey</h1>
                    <img src="./images/family.png" className="my-10 w-full" alt="men" data-aos="flip-left" />
                    <p className="text-xl mb-6 max-sm:text-base">The story begins in pre-partition India, at Dera Ismail Khan, Khyber Pakhtunkhwa, a region in current day
                    Pakistan. Populated by both Pashtun and Hindokwan (Hindu) communities, the region had been a hub for
                    cultivating high quality Hing since centuries.</p>
                </div>
                <div  className="flex my-10 max-sm:flex-col " data-aos="fade-up">
                    <div className="w-1/2 max-sm:w-full" >
                        <p className="text-xl text-left max-sm:text-base max-sm:text-center"><b className="text-yellow max-sm:text-sm">Year 1903</b>: Lala Chetan Das Bhatia is born in the idyllic
                        settings of Dera Ismail Khan. His life soon becomes infused
                        with the sharp, piercing aroma of Hing.
                        By his youth, Lala Ji had developed close bonds with the
                        local Pashtuns, the area's major Hing producers. As the
                        spice was in high demand in mainland India, Lala Ji soon
                        began procuring Hing from the Pashtuns and trading it with
                        Hindus in mainland India. This would mark the beginning of
                        a legacy that runs to this day, into its fourth generation, in
                        the form of Sri Raghunath Ji Overseas.</p>
                    </div>
                    <div className="w-1/2 flex flex-col arrowBack1 bg-red items-center pt-[10%] max-sm:w-full">
                        <img src="./images/about1.png" className="w-[25%]" alt="men" data-aos="flip-left" />
                        <b className="text-base text-yellow  max-sm:text-sm">Late Lala Chetan Das Bhatia Circa1903 to 1972</b>
                        <p className="font-thin  text-base max-sm:text-sm">Lala Ji's endearing persona made him the first face of Sri
                        Raghunath Ji Overseas, as the company transported high
                        quality Hing into pre-partition mainland India</p>
                    </div>
                </div>

                <div className="flex justify-center py-10">
                    <img src="./images/legacy.png" alt="legacy" className="w-1/3" />
                </div>

                <div className="" data-aos="fade-up">
                    <p className="text-xl mb-6 text-right max-sm:text-base max-sm:text-center">While Shri Ram Lal Bhatia consolidated Sri Raghunath Ji Overseas Hing business in India, his
                    son Shri Ajay Bhatia played a vital role in expanding the company's presence. He travelled
                    across India,  <b className="text-yellow">exploring new markets</b> for the company. All this while, the company had
                    focused primarily on the Hindi heartland of India's north. Shri Ajay Bhatia was surprised to
                    find that south India was, in fact, a bigger market. Hing is widely used in Sambar, a staple
                    dish of the south and is thus consumed extensively. Seizing the opportunity, Shri Ajay
                    Bhatia developed a strong customer base in the region. The 1990s saw the company
                    supplying raw Hing to manufacturers across the southern cities from Hyderabad to Chennai
                    and - Kumbakonam to Thrissur</p>
                    <p className="text-xl text-right pl-[20%] max-sm:text-base max-sm:text-center max-sm:pl-0">This further raised the stature of <b className="text-yellow">Sri Raghunath Ji Overseas</b> as the preferred supplier for
                    Hing manufacturers across the country.</p>
                </div>
                <div className="flex my-10 max-sm:flex-col" data-aos="fade-up">
                    <div className="w-1/2 flex flex-col items-center arrowBack1 max-sm:w-full">
                        <img src="./images/about2.png" className="w-1/4" alt="men" data-aos="flip-left" />
                        <b className="text-yellow text-base mt-2 max-sm:text-sm">Ajay Bhatia Born 1965</b>
                        <p className="text-base font-thin max-sm:text-sm">Shri Ajay Bhatia's initiatives saw the company expand its
                        customer base significantly, supplying raw material to Hing
                        manufacturers across India.</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-end pt-[12%] max-sm:w-full max-sm:items-center">
                        <img src="./images/about3.png" className="w-1/4" alt="men" data-aos="flip-left" />
                        <b className="text-base text-yellow mt-2 max-sm:text-sm">Sharad Bhatia Born 1988</b>
                    </div>
                </div>
                <div className="pb-10">
                    <p className="text-xl mb-6 text-left max-sm:text-base max-sm:text-center">At the turn of the 21st century, <b className="text-yellow">Sri Raghunath Ji Overseas</b> journey of growth was further spiced up
                    by the infusion of its fourth generation of leadership. Sri Sharad Bhatia, the current chairman,
                    joined the organisation at a young age of 20 years.</p>
                    <p className="text-xl text-left max-sm:text-base max-sm:text-center">Regular family discussions revolving around Hing had seeped him with a good understanding of the
                    spice. The makings of the finest Hing, their varieties, trustworthy sources and buyers, the volatility
                    of the market, it was all education to a growing Sharad Bhatia. In no time, he realized that Hing
                    enjoyed a very special place in the Indian kitchen and cuisine.</p>
                </div>
            </div>
            <Section9/>
            <Section10/>
        </div>
    )
}

export default  About;