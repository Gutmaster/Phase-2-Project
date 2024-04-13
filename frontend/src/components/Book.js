import React, {useState, useEffect} from 'react';

function Book({bookData, books, setBooks}) {
    const [book, setBook] = useState(bookData)
    const [donateTimer, setDonateTimer] = useState(false)
    
    function updateStock(amount){
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inStock: book.inStock + amount
            })
        })
        .then(res => res.json())
        .then((data) =>{
            setBook(data)
            setBooks(books.map(book => book.id === data.id ? data : book))
        })
        .catch(err => console.log(err))
        setDonateTimer(true)
        setTimeout(() => setDonateTimer(false), 750)
    }

    return (
        <div className='Book-card'>
            <img className='Book-image' src={book.image} alt={book.title}/>
            <p title='title'><span className='column1'>Title:</span> <span className='column2'>{book.title}</span></p>
            <p><span className='column1'>Author:</span> <span className='column2'>{book.author}</span></p>
            <p><span className='column1'>Genre:</span> <span className='column2'>{book.genre}</span></p>
            <br/>
            <span>
                {<button disabled={donateTimer ? true : false} onClick={()=>updateStock(1)}>Donate</button>}
                <p>{book.inStock} in stock.</p>
                {<button disabled={donateTimer ? true: false} onClick={()=>updateStock(-1)}>Borrow</button>}
            </span>
        </div>
    )
}

export default Book;