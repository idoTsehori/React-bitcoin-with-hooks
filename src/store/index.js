import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { contactReducer } from './reducers/contact.reducer'
import { userReducer } from './reducers/user.reducer'

const rootReducer = combineReducers({ contactReducer, userReducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.gStore = store
