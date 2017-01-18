import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
//Action Creators
function increment() {
  return {
    type: 'INCREMENT'
  }
}

function decrement() {
  return {
    type: 'DECREMENT'
  }
}

// Reducer
function reducer(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}
// store
const store = createStore(reducer)

// React Component
class Counter extends React.Component {
  render() {
    const {count, dispatch } = this.props
    return (
      <div className='container'>
        <div>Count: {count}</div>
        <div className="btn-group btn-group-lg">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state
  }
}
// Pass data from redux to React Component
const CounterContainer = connect(mapStateToProps)(Counter)
// <Counter count={state} />

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>
  , document.getElementById('counter'))
