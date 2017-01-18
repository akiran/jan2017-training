import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return <div key={todo.id}>{todo.text}</div>
        })}
      </div>
    )
  }
}
