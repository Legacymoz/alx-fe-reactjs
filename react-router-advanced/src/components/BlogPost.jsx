// src/components/BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic 'id' parameter from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post using the ID from the URL
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]); // Dependency array includes 'id' to refetch when it changes

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
