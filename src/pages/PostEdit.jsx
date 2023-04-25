import React, { useState } from "react";
import { supabase } from "../client.js";
import { useParams } from "react-router-dom";


const PostEdit = () => {

  const [post, setPost] = useState({title: "", content: "", image_url: ""});
  const { id } = useParams();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost( (prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  const editPost = async (event) => {
    event.preventDefault();
    // console.log(event.target.title)
    await supabase
      .from('Posts')
      .update({title: post.title, content: post.content, image_url: post.image_url})
      .eq('id', id);

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

        <input type="submit" value="Submit" onClick={editPost}/>
      </form>
    </div>
  );
};

export default PostEdit;