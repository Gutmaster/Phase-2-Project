import React from "react";
import Header from "./Header";

function Home(){
    return (
        <div className = "home">
            <header>
                <Header />
            </header>
            <h1>Home</h1>
            <p>Welcome to my library! 
               Feel free to browse our books to borrow, 
               or head over to the donate page if you're feeling generous!
            </p>
        </div>
    )
}

export default Home;