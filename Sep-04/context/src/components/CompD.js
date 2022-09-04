import React from 'react'
import { Ctx1 } from '../contexts'

const CompD = () => {
  return (
    <Ctx1.Consumer>
      {(data) => {
        return (
          <div>CompD
            -&gt; {data}
          </div>
        )
      }}
    </Ctx1.Consumer>
  )
}

export default CompD