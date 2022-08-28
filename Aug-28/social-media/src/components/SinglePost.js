import React from 'react'
import { Link } from 'react-router-dom';

const SinglePost = ({ data }) => {
  return (
    <Link to={`/post/${data.id}`}>
      <div>
        <p>{data.title}</p>
      </div>
    </Link>
  )
}

export default SinglePost