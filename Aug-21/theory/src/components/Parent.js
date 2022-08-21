import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
      <h2>This is a parent component</h2>
      {props.children}
    </div>
  )
}

export default Parent