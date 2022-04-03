import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'

import loginReducer from './login'
import catsReducer from './cats'

const rootReducer = combineReducers(({
    login: loginReducer,
    cats: catsReducer
}))

export default rootReducer