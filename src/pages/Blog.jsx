import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FormLayout from "./FormLayout";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuerry = searchParams.get("post") || "";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let searchValue = e.target.search.value;
    setSearchParams({post: searchValue});
  };

  return (
    <div>
      <h2>Blog</h2>
      <FormLayout
        submitHandler={submitHandler}
        placeholder={"Type here..."}
        btnText="Search"
        name="search"
      />
      <ul>
        {posts?.filter(
            post=>post.title.includes(postQuerry)
        )
        .map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
