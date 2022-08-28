import React from 'react'
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => {
  return (
    <div className='comments-container'>
      <h2>Comments: </h2>
      {comments.map((element, idx) => {
        return <SingleComment key={idx} data={element} />;
      })}
    </div>
  )
}

export default CommentList