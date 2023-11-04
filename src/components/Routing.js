import { BrowserRouter , Routes , Route } from "react-router-dom";
import App from "../App";
import Book from "./Book";

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/book" element={<Book/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;