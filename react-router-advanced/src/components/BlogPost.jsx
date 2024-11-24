// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Render the blog post based on the id */}
    </div>
  );
};

export default BlogPost;
