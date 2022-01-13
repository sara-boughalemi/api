import { useState, useEffect } from "react";
import axios from "axios";

const Container = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
 {posts.map((post) => {
     return (
         <div className="all" key={post.id}> 
           <h5 className="post">{post.userId}</h5>
           <h4 className="title">{post.title}</h4>
           <br/>
           <h5 className="body">{post.body}</h5>
           <br/>
         </div>
     )
 }
 )}
    </div>
  );
};

export default Container;
