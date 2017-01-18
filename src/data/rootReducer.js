import {combineReducers} from 'redux'
import todos from './todos'
import todoInput from './todoInput'

const rootReducer = combineReducers({
  todos,
  todoInput
})
export default rootReducer
