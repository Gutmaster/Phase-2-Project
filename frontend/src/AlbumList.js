import React, {useState, useEffect} from'react';
import Album from './Album';

function AlbumList(){
    const [albums, setAlbums] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {fetch('http://localhost:3000/albums')
    .then(res => res.json())
    .then(albums => setAlbums(albums))
    .catch(err => console.log(err))}, [message]);

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map(album => (
                    <Album className='Album-card' key={album.id} album={album} message={message} setMessage={setMessage}/>
                ))}
            </ul>
            {message === '' ? null : <p className='message'>{message}</p>}
        </div>
    );
}

export default AlbumList;