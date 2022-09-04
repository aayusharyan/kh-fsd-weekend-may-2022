import React from 'react'
import Comp4 from './Comp4'

const Comp3 = ({ data }) => {
  return (
    <div>Comp3 - {data}
      <Comp4 data={data} />
    </div>
  )
}

export default Comp3