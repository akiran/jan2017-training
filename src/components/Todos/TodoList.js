import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todos, deleteTodo, changeStatus} = this.props
    return (
      <div>
        {todos.map((todo) => {
          return <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus} />
        })}
      </div>
    )
  }
}
