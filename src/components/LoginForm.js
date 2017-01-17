import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  componentDidMount() {
    this.refs.username.focus()
  }
  changeUsername(e) {
    this.setState({
      username: e.target.value,
      error: ''
    })
  }
  changePassword(e) {
    this.setState({
      password: e.target.value,
      error: ''
    })
  }
  submitHandler(e) {
    e.preventDefault()
    if (!this.state.username || !this.state.password ) {
      this.setState({
        error: 'All fields are required'
      })
    }
    // API call
    console.log(this.state)
  }
  render() {
    return (
    <form onSubmit={this.submitHandler}>
      <input
        ref="username"
        className='form-control'
        type='text'
        placeholder='username'
        onChange={this.changeUsername}
        value={this.state.username}
      />
      <input
        ref='password'
        className='form-control'
        type='password'
        placeholder='password'
        onChange={this.changePassword}
        value={this.state.password}
      />
      {this.state.error}
      <input type='submit' value='Login' />
    </form>
  )
  }
}
