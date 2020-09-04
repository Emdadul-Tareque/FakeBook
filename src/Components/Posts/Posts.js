import React from 'react';
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const {id, title, body} = props.post;
    return (
      <div className="Posts">
        <h2>id: {id}</h2>
        <h3>title: {title} </h3>
        <p> {body} </p>
        {props.seeMoreButton && <Button variant="contained" color="secondary">
          <Link to={"/detail/" + id}> See more </Link>
        </Button>}
      </div>
    );
};

export default Posts;