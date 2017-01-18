import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default class Todos extends React.Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}
