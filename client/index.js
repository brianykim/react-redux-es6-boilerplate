import reducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HelloApp from './components/hello.jsx'


let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <HelloApp/>
  </Provider>,
  document.getElementById('hello')
)];
