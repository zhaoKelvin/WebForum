import React, { useState } from "react";
import { supabase } from "../client.js";


const PostCreate = () => {

  const [post, setPost] = useState({title: "", content: "", image_url: "", upvotes: 0, comments: []})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost( (prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  const createPost = async (event) => {
    event.preventDefault();
    // console.log(event.target.title)
    await supabase
      .from('Posts')
      .insert({title: post.title, content: post.content, image_url: post.image_url,
                      upvotes: post.upvotes, comments: post.comments});

    window.location = "/";
  }

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label> <br />
        <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
        <br/>

        <label htmlFor="content">Content</label><br />
        <textarea rows="5" cols="50" id="content" name="content" value={post.content} onChange={handleChange} >
        </textarea>
        <br/>

        <label htmlFor="image_url">Image URL</label><br/>
        <input type="text" id="image_url" name="image_url" value={post.image_url} onChange={handleChange}/><br/>
        <br/>

        <input type="submit" value="Submit" onClick={createPost}/>
      </form>
    </div>
  );
};

export default PostCreate;