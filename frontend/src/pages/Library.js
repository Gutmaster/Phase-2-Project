import React, {useState, useEffect} from'react';
import { useOutletContext } from'react-router-dom';
import Book from '../components/Book';
import "../App.css";

function Library(){
    const [message, setMessage] = useState('');
    const {books, setBooks} = useOutletContext()

    return (
        <div>
            <div className='library-container'>
                <h1>Books</h1>
                <ul>
                    {books.map(book => (
                        <Book className='Book-card' key={book.id} bookData={book} books={books} setBooks={setBooks}/>
                    ))}
                </ul>
                {message === '' ? null : <p className='message'>{message}</p>}
            </div>
        </div>
    );
}

export default Library;