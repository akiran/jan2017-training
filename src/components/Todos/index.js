import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import uuid from 'node-uuid'

var todos = [
  {id: '1', text: 'Learn react', completed: false},
  {id: '2', text: 'Learn React native', completed: false}
]
export default class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(text) {
    this.setState({
      todos: this.state.todos.concat({
        id: uuid.v4(),
        text: text,
        completed: false
      })
    })
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
