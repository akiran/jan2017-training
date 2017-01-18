import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import uuid from 'node-uuid'
import {connect} from 'react-redux'

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
