import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import Book from "./Book";
import About from "./About";
import Process from "./Process";
import Contact from "./Contact";
import Browse  from "./Browse";

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/book" element={<Book/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/Process" element={<Process/>} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Browse" element={<Browse/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;