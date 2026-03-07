import React from 'react';
import {Route, Routes} from "react-router";
import Home from "../components/home/Home.jsx";

const Routers = () => {
    return (
        <Routes>
            <Route path ='/' element={<Home/>} />
        </Routes>
    );
};

export default Routers;