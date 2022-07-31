class Picture extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternate} />
  }
}