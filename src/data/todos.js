import uuid from 'node-uuid'

var defaultTodos = [
  {id: '1', text: 'Learn react', completed: true},
  {id: '2', text: 'Learn React native', completed: false}
]

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
}

export function changeStatus(id) {
  return {
    type: 'CHANGE_STAUTUS',
    payload: {
      id
    }
  }
}


export default function todos(todos = defaultTodos, action) {
  switch(action.type) {
    case 'ADD_TODO': return todos.concat({
      id: uuid.v4(),
      text: action.payload.text,
      completed: false
    })
    case 'DELETE_TODO':
      return todos.filter(todo => todo.id !== action.payload.id)
    case 'CHANGE_STAUTUS': return todos.map(todo => {
      return todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
    })
    default: return todos
  }
}
