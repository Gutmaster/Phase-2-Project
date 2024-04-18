import React from "react";
import '../App.css';

function Home(){
    return (
        <div className = "home">
            <h1 className='home-text'>Library of Nothing</h1>
            <div className='background'>
                <img className = 'stretch' src={'https://live.staticflickr.com/3361/3502143020_6d149d2194_b.jpg'} alt={'library-background'}/>
            </div>
            <p className = 'welcome-text'>
                Welcome to my digital library, we don't offer pdfs or real books but you're free to 'borrow' anything we have on offer. Go to the library page
                and browse our books to borrow, or head over to the donate page if you're feeling generous!
            </p>
        </div>
    )
}

export default Home;