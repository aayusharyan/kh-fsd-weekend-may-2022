class App extends React.Component {
  render() {
    const colors = ["#123ABC", "#AAAAAA", "#111111", "#FF0000"];

    return <div>
      <h2>Colors Project</h2>
      {colors.map((element, idx) => {
        return <input type="color" value={element} />
      })}
      </div>
  }
}