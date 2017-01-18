
export function changeTodoInput(e) {
  return {
    type: 'CHANGE_TODO_INPUT',
    payload: {
      text: e.target.value
    }
  }
}

export function addTodo(e) {
  return {
    type: 'ADD_TODO',
    payload: {
      text: e.target.value
    }
  }
}

export default function todoInput(state = '', action) {
  switch(action.type) {
    case 'CHANGE_TODO_INPUT': return action.payload.text
    case 'ADD_TODO': return ''
    default: return state
  }
}
