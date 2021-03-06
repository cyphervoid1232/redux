import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todos from './reducers/todo'
import reducers from './reducers'
import StarwarApp from './StarwarApp'
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// ReactDOM.render(
//     <Provider store = {store}>
//         <App />
//     </Provider>, document.getElementById('root'));

ReactDOM.render(<StarwarApp/>, document.getElementById('root'));



