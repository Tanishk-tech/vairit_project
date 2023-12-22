import { useNavigate } from "react-router-dom";

const Section10 = () => {
    const navigate=useNavigate(null);
    const termPage = () => {
        navigate("/Terms");
    }

    const privacyPage = () => {
        navigate("/Privacy");
    }
    return (
        <div className="bg-grey pl-[12%] pr-[3%] py-[2%] flex max-sm:flex max-sm:text-center max-sm:items-center" id="s10">
            <p className="w-[50%] max-sm:hidden">Copyright © 2023 Sri Raghunath JI Overseas. All Right Reserved.</p>
            <div className="w-[50%] flex justify-end max-sm:hidden">
                <p className="pr-10"><a className="curser-pointer hover:text-red hover:underline" onClick={termPage}>Terms & Conditions</a></p>
                <p className=""><a className="curser-pointer hover:text-red hover:underline" onClick={privacyPage}>Privacy Policy</a></p>
            </div>
            <p className="hidden max-sm:block">Copyright © 2023 Sri Raghunath JI Overseas. All Right Reserved. Terms & Conditions .Privacy Policy</p>
        </div>
    )
}

export default Section10;