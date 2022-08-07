import React, { Component } from 'react'
import Child4 from './Child4'

export default class Child3 extends Component {
  render() {
    return (
      <div>
        <Child4 message={this.props.message} />
      </div>
    )
  }
}
