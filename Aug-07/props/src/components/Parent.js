import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  childInputChanged = value => {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Child inputChangeFn={this.childInputChanged} />
      </div>
    )
  }
}
