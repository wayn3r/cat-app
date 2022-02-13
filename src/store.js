import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { catReducer } from 'cat/reducers/catReducer'
import { breedReducer } from 'breed/reducers/breedReducer'

const reducers = combineReducers({ cats: catReducer, breeds: breedReducer })

export const store = createStore(reducers, applyMiddleware(thunk))
