import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { catReducer } from 'reducers/catReducer'

const reducers = combineReducers({ cats: catReducer })

export const store = createStore(reducers, applyMiddleware(thunk))
