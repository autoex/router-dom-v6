import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const BlogItem = () => {
  const [post, setPost] = useState(null);
  const nav = useNavigate();
  console.log(nav);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);
  if (!post) return <>'Wait..'</>
  return (
    <div>
      <h2>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
      <p> {post.body}</p>
      <Button variant='primary' onClick={() => nav(-1)}>Back</Button>
    </div>
  );
};

export default BlogItem;
