import React from 'react'

const ControlledChild = (props) => {
  return (
    <input type="text" value={props.content} onChange={e => props.setChange(e.target.value)} />
  )
}

export default ControlledChild