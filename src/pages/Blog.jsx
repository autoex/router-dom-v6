import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
