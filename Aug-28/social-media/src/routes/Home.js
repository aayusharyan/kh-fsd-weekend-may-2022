import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(_ => {
    (async _ => {
      const app_id = "62a3097faef5059fdc0b3c55";
      const response = await axios.get('https://dummyapi.io/data/v1/post', {
        headers: {
          'app-id': app_id
        }
      });
      console.log(response.data);
    })();
  })

  useEffect(_ => {
    (async _ => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    })();
  }, []);

  return (
    <>
      <section>
        <h2 className='heading'>All Posts</h2>
        <PostList posts={posts} />
      </section>
    </>
  )
}

export default Home