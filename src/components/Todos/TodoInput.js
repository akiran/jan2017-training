import React from 'react'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.enterHandler = this.enterHandler.bind(this)
  }
  changeHandler(e) {
    this.setState({
      text: e.target.value
    })
  }
  enterHandler(e) {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.text)
      this.setState({
        text: ''
      })
    }
  }
  render() {
    return (
      <input
        className='form-control'
        onChange={this.changeHandler}
        onKeyDown={this.enterHandler}
        value={this.state.text}
       />
    )
  }
}
