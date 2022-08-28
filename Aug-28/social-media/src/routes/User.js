import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserDetail from '../components/UserDetail';
import PostList from '../components/PostList';

const User = () => {
  const {user_id} = useParams();
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(_ => {
    (async _ => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
      setUserData(response.data);
    })();
  }, [user_id]);

  useEffect(_ => {
    (async _ => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`);
      setPosts(response.data);
    })();
  }, [user_id]);


  return (
    <section>
      <h2 className='heading'>User Profile</h2>
      <UserDetail data={userData} />
      <PostList posts={posts} />
    </section>
  )
}

export default User