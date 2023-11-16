import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import Book from "./Book";
import About from "./About";
// import Process from "./Process";

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/book" element={<Book/>} />
                    <Route path="/about" element={<About/>} />
                    {/* <Route path="/Process" element={<Process/>} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;