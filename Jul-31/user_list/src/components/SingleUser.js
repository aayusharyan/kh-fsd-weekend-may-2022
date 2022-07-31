class SingleUser extends React.Component {
  render() {
    return <li>{this.props.first_name} {this.props.last_name} ({this.props.email})</li>
  }
}