import React from 'react';

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return <div onClick={this.toggle}>Switch: {this.state.flag ? 'on' : 'off'}</div>
  }
}
