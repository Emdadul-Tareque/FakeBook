import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Details = () => {
    const{key} = useParams()
    const[postDetail, setPostDetail] = useState([])
    const url = "https://jsonplaceholder.typicode.com/posts/"+key;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))

    })
    const {userId, title, body} = postDetail;
    return (
        <div>
            <h1>userId: {userId} </h1>
            <h3>title: {title} </h3>
            <p> {body} </p>
        </div>
    );
};

export default Details;