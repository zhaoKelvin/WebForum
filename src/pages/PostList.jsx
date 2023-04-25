import React, { useState, useEffect } from 'react';
import Card from "../components/card.jsx";
import "./PostList.css"


const PostList = ({data}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div className="PostList">
      {
        posts && posts.length > 0 ?
          posts.map((post,index) =>
            <Card id={post.id} title={post.title} content={post.content}
                  image_url={post.image_url} upvotes={post.upvotes} comments={post.comments}/>
          ) : <h2>{'No Posts Created'}</h2>
      }
    </div>
  );
};

export default PostList;