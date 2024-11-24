// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      refetchOnWindowFocus: false, // Prevent refetching on window focus
      keepPreviousData: true, // Keep previous data while refetching
      staleTime: 30000, // 30 seconds stale time
      cacheTime: 600000, // Cache data for 10 minutes
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <p>Loading new data...</p>}
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export default PostsComponent;
