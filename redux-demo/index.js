const redux = require('redux')
const createStore = redux.createStore 
const combineReducers = redux.combineReducers 

// logger middleware 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger() 
const applyMiddleware = redux.applyMiddleware

//CREATE ACTION

const BUY_CAKE = 'BUY_CAKE' // define string constant indicates type of bindActionCreators
const BUY_ICECREAM = 'BUY_ICECREAM'

//define action - object that has a type property
//ACTION CREATOR 
function buyCake() { //actioncreator is a function that returns an action 
    return {
        type: BUY_CAKE, 
        info: 'First redux action'
    }
}
function buyIceCream() { //actioncreator is a function that returns an action 
    return {
        type: BUY_ICECREAM, 
    }
}

//REDUCER FUNCTION
// (previousState, action) => newState 

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20 
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20 
}


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, //make a copy of the state object first if there are more properties 
            numOfCakes: state.numOfCakes - 1
        }
        default: return state 
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,  
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state 
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {}) //add listener to store
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()



