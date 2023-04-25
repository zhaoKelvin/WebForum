import { useState, useEffect } from 'react';
import { useRoutes, Link } from "react-router-dom";
import PostList from "./pages/PostList.jsx";
import PostView from "./pages/PostView.jsx";
import PostCreate from "./pages/PostCreate.jsx";
import PostEdit from "./pages/PostEdit.jsx";
import NavBar from "./components/NavBar.jsx";
import { supabase } from "./client.js";
import './App.css';

const App = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true })


      // set state of posts
      setPosts(data);
    }
    fetchPosts();
  }, [])

  // Set up routes
  let element = useRoutes([
    {
      path: "/",
      element:<PostList data={posts}/>
    },
    {
      path:"/view/:id/edit/:id",
      element: <PostEdit data={posts} />
    },
    {
      path:"/new",
      element: <PostCreate />
    },
    {
      path: "/view/:id",
      element: <PostView />
    }
  ]);

  return (
    <div className="App">
      <NavBar />
      <h1 className={"Header"}>WebForum</h1>
      {element}
    </div>
  );
};

export default App;
