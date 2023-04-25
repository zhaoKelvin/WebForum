import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./card.css"
import {supabase} from "../client.js";


const Card = (props) => {

  const [upvotes, setUpvotes] = useState(props.upvotes);

  useEffect(() => {
    const updateUV = async () => {
      await supabase
        .from('Posts')
        .update({upvotes: upvotes})
        .eq('id', props.id);
    }
    updateUV();
  }, [upvotes])

  const addUpvotes = () => {
    setUpvotes(upvotes + 1);
  }


  return (
    <div className="Card">
      <Link to={'view/' + props.id}><h2 className="title">{props.title}</h2></Link>
      <p className="date_created">{props.date_created}</p>
      <img className={"image"} src={props.image_url} alt={props.image_url} />
      <button className="upvote" onClick={addUpvotes} >{upvotes}👍</button>
    </div>
  );
};

export default Card;