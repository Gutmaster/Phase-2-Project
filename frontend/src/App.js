// App.js
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App(){
    const [books, setBooks] = useState([]);

    useEffect(() => {fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
        setBooks(books)
    })
    .catch(err => console.log(err))}, []);

    return(
        <>
            <header>
                <Header />
                <NavBar />
            </header>
            <Outlet context={{books: books, setBooks: setBooks}}/>
        </>
    );
};

export default App