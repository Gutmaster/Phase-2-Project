import React, {useState, useEffect} from'react';
import Book from '../components/Book';
import "../App.css";

function Library(){
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => setBooks(books))
    .catch(err => console.log(err))}, [message]);

    return (
        <div className='library-container'>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <Book className='Book-card' key={book.id} book={book} message={message} setMessage={setMessage}/>
                ))}
            </ul>
            {message === '' ? null : <p className='message'>{message}</p>}
        </div>
    );
}

export default Library;