import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function DonationForm(){
    const {books, setBooks} = useOutletContext()

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');

    function addBook(newBook){
        setBooks([...books, newBook])
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                genre: genre,
                image: image,
                inStock: 1
            })
        })
        .then((res)=>res.json())
        .then(data => {
            console.log(data)
            console.log('Thank you for your donation!')
            setTitle('')
            setAuthor('')
            setGenre('')
            setImage('')

            addBook(data)
        })
    }
    return (
        <div className='Donation-form'>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Donate a new Album: </h2>
                <label className='column1'>Title: </label>
                <input onChange={(e)=>(setTitle(e.target.value))} className='column2'type="text" name="title" value={title}/><br/>
                <label className='column1'>Author: </label>
                <input onChange={(e)=>(setAuthor(e.target.value))} className='column2' type="text" name="author" value={author}/><br/>
                <label className='column1'>Genre: </label>
                <input onChange={(e)=>(setGenre(e.target.value))} className='column2'type="text" name="genre" value={genre}/><br/>
                <label className='column1'>Image URL: </label>
                <input onChange={(e)=>(setImage(e.target.value))}className='column2'type="text" name="image" value={image}/><br/>
                <button type="submit">Donate</button>
            </form>
        </div>
    )
}

export default DonationForm;