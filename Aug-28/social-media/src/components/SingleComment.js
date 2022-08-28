import React from 'react'

const SingleComment = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>{data.name}</h4>
      <p>{data.body}</p>
    </div>
  )
}

export default SingleComment