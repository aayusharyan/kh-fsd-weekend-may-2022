import React from 'react';
import { Link } from 'react-router-dom';

const PostDetail = ({ detail, userDetail }) => {
  console.log(userDetail);
  return (
    <div className='post-detail'>
      <h2>{detail.title}</h2>
      <p>{detail.body}</p>
      <br />
      <p>Posted By - <Link to={`/user/${userDetail.id}`}>{userDetail.username}</Link></p>
    </div>
  )
}

export default PostDetail