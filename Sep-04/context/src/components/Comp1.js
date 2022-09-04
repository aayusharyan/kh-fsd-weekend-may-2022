import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({ data }) => {
  return (
    <div>Comp1 - {data}
      <Comp2 data={data} />
    </div>
  )
}

export default Comp1