import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { supabase } from "../client.js";
import CommentList from "../components/CommentList.jsx";
import "./PostView.css";


const PostView = () => {

  const {id} = useParams();

  const [post, setPost] = useState({title: "", content: "", image_url: "", upvotes: 0, comments: []});
  // const [upvotes, setUpvotes] = useState(0);
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      const {data, error} = await supabase
        .from('Posts')
        .select()
        .eq('id', id);

      // set state of posts
      setPost(data[0]);
      setUpvotes(data[0].upvotes);
    }
    fetchPosts();
  }, [])

  const addUpvotes = async () => {
    const newUV = post.upvotes + 1;
    await supabase
      .from('Posts')
      .update({upvotes: newUV})
      .eq('id', id);
    setPost({...post, upvotes: newUV});
  }

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .delete()
      .eq('id', id);

    window.location = "/";
  }

  const handleChange = (e) => {
    const {value} = e.target
    setNewComment(value)
  }

  const updateComments = async () => {
    const newComments = post.comments.concat([newComment]);
    await supabase
      .from('Posts')
      .update({comments: newComments})
      .eq('id', id);
    setPost({...post, comments: newComments});
  }

  return (
    <div className="PostView">
      <Link to={'edit/'+ post.id}><button className="edit-button"> Edit </button></Link>
      <button className="delete-button" onClick={deletePost}>Delete</button>
      <h2 className="title">{post.title}</h2>
      <p className="content">{post.content}</p>
      <img className={"image"} src={post.image_url} alt={post.image_url} />
      <button className="upvote" onClick={addUpvotes} >{post.upvotes}👍</button>

      <button onClick={updateComments}><label htmlFor="comment">Add Comment</label></button><br />
      <textarea rows="1" cols="50" id="comment" name="comment" value={newComment} onChange={handleChange}>
        </textarea>
      <CommentList comments={post.comments}/>
    </div>
  );
};

export default PostView;