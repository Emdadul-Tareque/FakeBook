import React from 'react';
import './Comments.css'
const Comments = (props) => {
    const {name, email, body} = props.comment;
    console.log(name)
    return (
        <div className = "comments-container">
           <h3> Name:  {name} </h3> 
           <p> email: {email} </p>
           <h4> {body} </h4>
        </div>
    );
};

export default Comments;
