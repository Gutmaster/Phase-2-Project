// App.js
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App(){
    return(
        <>
            <header>
                <Header />
                <NavBar />
            </header>
            <Outlet />
        </>
    );
};

export default App