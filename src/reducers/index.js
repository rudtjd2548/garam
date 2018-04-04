import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  state: (state = {}) => state
})

const reducer = combineReducers(rootReducer)
const store = createStore(rootReducer)

export default rootReducer
