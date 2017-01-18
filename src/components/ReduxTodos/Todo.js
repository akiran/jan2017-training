import React from 'react'
import {deleteTodo, changeStatus} from '../../data/todos'
import {connect} from 'react-redux'

class Todo extends React.Component {
  render() {
    const {todo: {id, text, completed}, deleteTodo, changeStatus} = this.props
    return (
      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={changeStatus.bind(null, id)}
         />
        {text}
        <button onClick={deleteTodo.bind(null, id)}>x</button>
      </div>
    )
  }
}

export default connect(null, {deleteTodo, changeStatus})(Todo)
