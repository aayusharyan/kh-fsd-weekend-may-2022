import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostDetail from '../components/PostDetail';
import CommentList from '../components/CommentList';

const Post = () => {
  const { post_id } = useParams();
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [userData, setUserData] = useState({});
  
  useEffect(_ => {
    (async _ => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
      setPostData(response.data);
    })();
  }, [post_id]);

  useEffect(_ => {
    (async _ => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`);
      setComments(response.data);
    })();
  }, [post_id]);

  useEffect(_ => {
    (async _ => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
      setUserData(response.data);
    })();
  }, [postData]);

  
  return (
    <section>
      <h2 className='heading'>Post Detail</h2>
      <PostDetail detail={postData} userDetail={userData}/>
      <br />
      <CommentList comments={comments}/>
    </section>
  )
}

export default Post