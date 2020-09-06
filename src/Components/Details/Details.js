import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
import Comments from '../Comments/Comments';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: 20,
    boxShadow: "5px 5px 10px 5px gray",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Details() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

   const{key} = useParams()
    const[postDetail, setPostDetail] = useState([])
    

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${key}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))

    }, [key])

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        const URL = `https://jsonplaceholder.typicode.com/comments?postId=${key}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => setComments(data))
        
    }, [key])
    const {userId, title, body} = postDetail;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="detail-container">
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h3">
            <strong>User id: {userId}</strong>
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            <strong>{title}</strong>
          </Typography>
          <br />
          <Typography gutterBottom variant="h6" component="h6">
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <p>click here to see comments</p>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {comments.map((comment) => (
                <Comments key = {comment.id} comment={comment}></Comments>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
