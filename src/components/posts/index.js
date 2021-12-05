import React from 'react';
import useFetch from '../../shared/useFetch';

const Posts = () => {
  const base_url = 'https://jsonplaceholder.typicode.com/posts';
  const { data, loading, error } = useFetch(base_url);

  return (
    <div>
      <h2>Custom useFetch Hook</h2>

      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      {data &&
        data.slice(0, 10).map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Posts;
