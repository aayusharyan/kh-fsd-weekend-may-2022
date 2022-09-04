import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const value = useSelector(store => store.value);
  
  return (
    <p>{value}</p>
  )
}

export default Display