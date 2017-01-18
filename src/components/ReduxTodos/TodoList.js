import React from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'

class TodoList extends React.Component {
  render() {
    const {todos, deleteTodo, changeStatus} = this.props
    return (
      <div>
        {todos.map((todo) => {
          return <Todo
              key={todo.id}
              todo={todo}
          />
        })}
      </div>
    )
  }
}

export default connect((state) => {
  return {
    todos: state.todos
  }
})(TodoList)
