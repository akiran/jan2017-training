import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import uuid from 'node-uuid'

var todos = [
  {id: '1', text: 'Learn react', completed: true},
  {id: '2', text: 'Learn React native', completed: false}
]
export default class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
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
  deleteTodo(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  changeStatus(id) {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          changeStatus={this.changeStatus}
        />
      </div>
    )
  }
}
