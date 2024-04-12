import React, {useState, useEffect} from 'react';

function Book({book, message, setMessage}) {
    const [inStock, setInStock] = useState(book.inStock)

    function updateStock(amount){
        fetch(`http://localhost:3000/albums/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inStock: inStock + amount
            })
        })
        .then(() =>{
            setInStock(inStock + amount)
            setMessage(amount > 0 ? "Thank you for your donation!" : 'Enjoy!')
            setTimeout(() => setMessage(''), 750)
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='Book-card'>
            <img className='Book-image' src={book.image} alt={book.title}/>
            <p><span className='column1'>Title:</span> <span className='column2'>{book.title}</span></p>
            <p><span className='column1'>Author:</span> <span className='column2'>{book.author}</span></p>
            <p><span className='column1'>Genre:</span> <span className='column2'>{book.genre}</span></p>
            <br/>
            <span>
                {<button disabled={message === '' ? false : true} onClick={()=>updateStock(1)}>Donate</button>}
                <p>{inStock} in stock.</p>
                {<button disabled={message === '' ? false : true} onClick={()=>updateStock(-1)}>Borrow</button>}
            </span>
        </div>
    )
}

export default Book;