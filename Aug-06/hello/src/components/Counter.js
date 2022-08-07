import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState(c => {
      return {counter: c.counter + 1}
    })
  }

  decrement = () => {
    this.setState(c => {
      return {counter: c.counter - 1}
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>Decrease</button>
        <span> &nbsp; {this.state.counter} &nbsp; </span>
        <button onClick={this.increment}>Increase</button>
      </div>
    )
  }
}

export default Counter;