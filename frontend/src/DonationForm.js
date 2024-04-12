import React from "react";

function DonationForm(){
    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: e.target.title.value,
                author: e.target.author.value,
                genre: e.target.genre.value,
                image: e.target.image.value,
                inStock: 1
            })
        })
        .then(()=>{
            console.log('Thank you for your donation!')
        })
    }
    return (
        <div className='Donation-form'>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Donate a new Album: </h2>
                <label className='column1'>Title: </label>
                <input className='column2'type="text" name="title" /><br/>
                <label className='column1'>Author: </label>
                <input className='column2' type="text" name="author" /><br/>
                <label className='column1'>Genre: </label>
                <input className='column2'type="text" name="genre" /><br/>
                <label className='column1'>Image URL: </label>
                <input className='column2'type="text" name="image" /><br/>
                <button type="submit">Donate</button>
            </form>
        </div>
    )
}

export default DonationForm;