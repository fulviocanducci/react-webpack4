import React, { useState, useEffect } from 'react';

export default function Post() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            load()
        }, 2000);
    },[]);
    function load() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(response => response.json())
            .then(response => setItems(response))
            .catch(error => console.log(error));
    }
    return (
        <>
            <ul>
                {items.length > 0 ? 
                    items.map(item => <li key={item.id}>{item.title}</li>)
                 : (<div>Carregando ...</div>)
                }                
            </ul>
        </>
    )
}

