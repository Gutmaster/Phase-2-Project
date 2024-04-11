import React, {useState, useEffect} from 'react';

function Album({album, message, setMessage}) {
    const [inStock, setInStock] = useState(album.inStock)

    function updateStock(amount){
        fetch(`http://localhost:3000/albums/${album.id}`, {
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
        <div className='Album-card'>
            <img className='Album-image' src={album.image} alt={album.title}/>
            <p><span className='column1'>Title:</span> <span className='column2'>{album.title}</span></p>
            <p><span className='column1'>Artist:</span> <span className='column2'>{album.artist}</span></p>
            <p><span className='column1'>Length:</span> <span className='column2'>{album.length}</span></p>
            <br/>
            <span>
                {<button disabled={message === '' ? false : true} onClick={()=>updateStock(1)}>Donate</button>}
                <p>{inStock} in stock.</p>
                {<button disabled={message === '' ? false : true} onClick={()=>updateStock(-1)}>Borrow</button>}
            </span>
        </div>
    )
}

export default Album;