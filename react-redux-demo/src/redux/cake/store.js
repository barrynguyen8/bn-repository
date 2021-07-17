import { createStore } from 'redux'
import cakeReducer from './cakeReducer'

//create a redux store 

const store = createStore(cakeReducer)

export default store

