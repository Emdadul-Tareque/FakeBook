import React from 'react';
import {Button} from '@material-ui/core'

import './Posts.css'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: 20, 
    boxShadow : "5px 5px 10px 5px gray"
  },
  media: {
    height: 140,
  },
});

const Posts = (props) => {
  const classes = useStyles();
    const {userId, id, title, body} = props.post;
    return (
      <div className="Posts">
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <strong> User id: {userId}</strong>
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <strong>id: {id}</strong>
              </Typography>

              <Typography gutterBottom variant="h6" component="h3">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={"/detail/" + id}>
              <Button size="small" color="primary">See more</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
};

export default Posts;