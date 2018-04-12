import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import 'babel-polyfill';
import "../styles/styles.scss"
import './assets/favicon.ico'

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore)
const store = createStoreWithMiddleware(reducers)

import TopNav from './components/nav/TopNav'
import BtnNav from './components/nav/BtnNav'
import LeftNav from './components/nav/LeftNav'
import TopPic from './components/nav/TopPic'
import Footer from './components/nav/footer'

import About from './components/about'
import contactUs from './components/emailForm'
import findUs from './components/findUs'
import partner from './components/partner'

import Slider1 from './components/BottomSlider'
import Feed from './components/instagram'
import imgBoard from './components/imgBoard'
import howtoServe from './components/howtoServe'
import svg_map from './components/svg_map'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <div>
    		<TopNav />
  	    <Route exact path="/" component={BtnNav} />
        <Route exact path="/" component={howtoServe} />
        <Route exact path="/" component={imgBoard} />
        <Route exact path="/" component={svg_map} />
    		<Route path="/page" component={TopPic} />
    		<Route path="/page" component={LeftNav} />
    		<Switch>
    			<Route path="/page/about" component={About} />
    			<Route path="/page/partner" component={partner} />
    			<Route path="/page/contactUs" component={contactUs} />
    			<Route path="/page/findUs" component={findUs} />
    		</Switch>
        <Slider1 />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
