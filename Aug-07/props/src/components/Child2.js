import React, { Component } from 'react'
import Child3 from './Child3'

export default class Child2 extends Component {
  render() {
    return (
      <div>
        <Child3 message={this.props.message} />
      </div>
    )
  }
}
