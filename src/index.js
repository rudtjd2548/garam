import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import SendMessage from './components/emailForm'
import LeftNav from './components/nav/LeftNav'
import TopPic from './components/nav/TopPic'
import IntroCompany from './components/introCompany'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <div>
		<TopNav />
	    <Route exact path="/" component={BtnNav} />
		<Route path="/page" component={TopPic} />
		<Route path="/page" component={LeftNav} />
		<Switch>
			<Route path="/page/IntroCompany" component={IntroCompany} />
			<Route path="/page/emailForm" component={SendMessage} />
		</Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
