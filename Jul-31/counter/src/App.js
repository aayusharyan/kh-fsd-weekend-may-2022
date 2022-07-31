class App extends React.Component {
  constructor() {
    super();
    // this.counter = 1337;
    this.state = {
      counter: 1337
    };
  }


  increment = () => {
    // this.counter = this.counter + 1;
    // console.log(this.counter);
    this.setState(currentState => {
      const newState = {
        counter: currentState.counter + 1
      };

      return newState;
    });
  }


  render() {
    return <div>
      <h2>Counter</h2>
      <hr />
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
    </div>
  }
}