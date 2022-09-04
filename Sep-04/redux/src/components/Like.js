import React from 'react'
import { useDispatch } from 'react-redux';
import { like } from '../slice';

const Like = () => {
  const dispatch = useDispatch();

  const btnClicked = _ => {
    dispatch(like());
  }
  return (
    <button onClick={btnClicked}>Like</button>
  )
}

export default Like