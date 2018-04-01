import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import 'babel-polyfill';
import "../styles/styles.scss"

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore)
const store = createStoreWithMiddleware(reducers)

import App from './components/App'
import TopNav from './components/nav/TopNav'
import BtnNav from './components/nav/BtnNav'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <div>
		<TopNav />
		<BtnNav />
	    <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
