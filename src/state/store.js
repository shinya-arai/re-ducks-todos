import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import * as reducers from './ducks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware())
  )
}

export default configureStore