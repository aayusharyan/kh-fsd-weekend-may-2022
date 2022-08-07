import React, { Component } from 'react'
import Interval from './Interval'

export default class Container extends Component {
  constructor() {
    super();

    this.state = { showTimer: true };
  }

  toggleShowTimer = () => {
    this.setState(current => {
      return {showTimer: !current.showTimer};
    });
  }

  render() {
    return (
      <div>
        <h2>Container</h2>
        <button onClick={this.toggleShowTimer}>Show/Hide</button>
        {this.state.showTimer ? <Interval /> : false}
      </div>
    )
  }
}
