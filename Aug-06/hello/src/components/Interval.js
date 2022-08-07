import React, { Component } from 'react'

export default class Interval extends Component {
  constructor() {
    super();

    this.state = { time: 0, intervalId: 0 };
  }

  updateTime = () => {
    console.log(this.state.time);
    this.setState(current => {
      return {time: current.time + 1}
    });
  }

  componentDidMount() {
    const intervalId = setInterval(this.updateTime, 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    )
  }
}
