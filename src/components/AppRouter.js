import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Items from "./items";

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Items addToCart={props.addToCart} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
