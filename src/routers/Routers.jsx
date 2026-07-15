import {Route, Routes} from "react-router";
import Home from "../components/home/Home.jsx";

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path ='/' element={<Home/>}/>
            </Routes>
        </div>
    );
};

export default Routers;