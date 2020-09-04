import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Post = () => {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))

    }, [])

    return (
        <div>
            {
                posts.map(post => <Posts post = {post} seeMoreButton = {true}></Posts>)
            }
        </div>
    );
};

export default Post;