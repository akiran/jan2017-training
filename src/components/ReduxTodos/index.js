import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import uuid from 'node-uuid'
import {connect} from 'react-redux'

class Todos extends React.Component {
  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          todos={this.props.todos}
          deleteTodo={this.deleteTodo}
          changeStatus={this.changeStatus}
        />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    todos: state.todos
  }
})(Todos)
