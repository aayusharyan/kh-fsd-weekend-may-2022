import React from 'react'
import SinglePost from './SinglePost';

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className='post-container'>
      {posts.map((element, idx) => {
        return <SinglePost key={idx} data={element} />
      })}
    </div>
  )
}

export default PostList