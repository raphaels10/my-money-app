import React from 'react'
import ReactDOM from 'react-dom'
import AuthOrApp from './main/authOrApp'
import App from './main/app'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk)(createStore)(reducers, devTools)


ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp/>
    </Provider>
, document.getElementById("app"))