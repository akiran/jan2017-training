import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.toggleStatus = this.toggleStatus.bind(this)
  }
  toggleStatus() {
    const {todo: {id}, changeStatus} = this.props
    changeStatus(id)
  }
  render() {
    const {todo: {id, text, completed}, deleteTodo, changeStatus} = this.props
    return (
      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.toggleStatus}
         />
        {text}
        <button onClick={deleteTodo.bind(null, id)}>x</button>
      </div>
    )
  }
}
