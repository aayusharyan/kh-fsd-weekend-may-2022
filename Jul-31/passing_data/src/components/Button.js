class Button extends React.Component {
  clicked = () => {
    alert("Button clicked");
  }
  render() {
    console.log(this.props);
    let button_caption = "Click the button";

    if(this.props.caption != undefined) {
      button_caption = this.props.caption;
    }

    return <button onClick={this.clicked}>{button_caption}</button>
  }
}