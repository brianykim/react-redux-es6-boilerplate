import { createStore } from 'redux'

function reducer(state = 0, action) {
  switch (action.type) {
  case 'UP':
    return state + 1
  case 'DOWN':
    return state - 1
  default:
    return state
  }
}


let store = createStore(reducer)

store.dispatch({type: 'UP'})
