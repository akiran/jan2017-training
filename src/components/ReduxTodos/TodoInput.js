import React from 'react'
import {connect} from 'react-redux'
import {changeTodoInput, addTodo} from '../../data/todoInput'

class TodoInput extends React.Component {
  render() {
    const {changeTodoInput, addTodo, todoInput} = this.props
    return (
      <input
        className='form-control'
        onChange={changeTodoInput}
        onKeyDown={(e) => e.key === 'Enter' ? addTodo(e): null}
        value={todoInput}
       />
    )
  }
}

const mapStateToProps = function (state) {
  return {
    todoInput: state.todoInput
  }
}

export default connect(mapStateToProps, {
  changeTodoInput,
  addTodo
})(TodoInput)
