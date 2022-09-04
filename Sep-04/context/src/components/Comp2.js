import React from 'react'
import Comp3 from './Comp3'

const Comp2 = ({ data }) => {
  return (
    <div>Comp2 - {data}
      <Comp3 data={data} />
    </div>
  )
}

export default Comp2