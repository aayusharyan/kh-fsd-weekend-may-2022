import React, { useState } from 'react'
import ControlledChild from './ControlledChild'

const ControlledParent = () => {
  const [value, setValue] = useState("");
  return (
    <>
      ControlledParent
      <br />
      <ControlledChild content={value} setChange={setValue}/>
      <br />
      <p>{value}</p>

    </>
  )
}

export default ControlledParent