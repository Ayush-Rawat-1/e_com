import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import "./App.sass";
function App(){

    return (
    <div className="fullPage" >
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home  />} />
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;