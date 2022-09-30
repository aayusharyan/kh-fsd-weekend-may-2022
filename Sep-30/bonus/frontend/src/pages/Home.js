import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../slice';

const Home = () => {
  const user = useSelector(state => state.user);
  const [postList, setPostList] = useState([]);
  const dispatch = useDispatch();

  useEffect(_ => {
    console.log(user);
    if(user._id !== undefined) {
      (async _ => {
        const response = await axios.get("http://localhost:3007/feed", {
          headers: {
            'Authorization': "Bearer " + user._id
          }
        });
        setPostList(response.data.data);
      })();
    }
  }, [user]);

  // const logout = _ => {
  //   dispatch(logout());
  // }
  
  return (
    <>
      {user._id === undefined ? (
        <Link to="/login">Click here to login</Link>
      ): (
        <>
          <Link to="/new">New Post</Link>
          &emsp;
          <button onClick={logout}>Logout</button>
          <PostList list={postList} />
        </>
      )}
    </>
  )
}

export default Home;