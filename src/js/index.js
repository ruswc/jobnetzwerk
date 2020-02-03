// document.addEventListener("readystatechange", event => {
// if (event.target.readyState === "interactive") {
// same as:  ..addEventListener("DOMContentLoaded".. and   jQuery.ready
// console.log("All HTML DOM elements are accessible");
// }

// if (event.target.readyState === "complete") {
//     console.log("Now external resources are loaded too, like css,src etc... ")
//     const chat = document.getElementById("chat-container")
//     console.dir(chat)
//     console.log(chat)
//     window.addEventListener("scroll", function (a) {
//         console.log(a)
//     })
// }
// })

// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//
// const redux = require('redux')
// const reduxLogger = require('redux-logger')
//
// const createStore = redux.createStore
// const combineReducers = redux.combineReducers
// const applyMiddleware = redux.applyMiddleware
//
// const logger = reduxLogger.createLogger()
//
// const BUY_CAKE = 'BUY_CAKE'
// const SELL_CAKE = 'SELL_CAKE'
//
// const BUY_ICECREAM = 'BUY_ICECREAM'
// const SELL_ICECREAM = 'SELL_ICECREAM'
//
// function buyCake(text) {
//   return {
//     type: BUY_CAKE,
//     info: 'First redux in action',
//     text
//   }
// }
//
// function sellCake(text) {
//   return {
//     type: SELL_CAKE,
//     text
//   }
// }
//
// function buyIceCream() {
//   return {
//     type: BUY_ICECREAM
//   }
// }
//
// function sellIceCream() {
//   return {
//     type: SELL_ICECREAM
//   }
// }
//
// // const initialState = {
// //   numOfCakes: 10,
// //   numOfIceCreams: 10
// // }
//
// const initialCakeState = {
//   numOfCakes: 10
// }
//
// const initialIceCreamState = {
//   numOfIceCreams: 10
// }
//
// const cakeReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
//     case SELL_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + 1
//       }
//     default:
//       return state
//   }
// }
//
// const iceCreamReducer = (state = initialIceCreamState, action) => {
//   switch (action.type) {
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       }
//     case SELL_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams + 1
//       }
//     default:
//       return state
//   }
// }
//
// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer
// })
//
// const store = createStore(rootReducer, applyMiddleware(logger))
//
// console.log(`Initial state`, store.getState())
//
// const unsubsribe = store.subscribe(() => {})
//
// store.dispatch(buyCake('1st buying cake'))
// store.dispatch(buyCake('2nd buying cake'))
// store.dispatch(sellCake(3))
//
// store.dispatch(buyIceCream(4))
// store.dispatch(sellIceCream(5))
// store.dispatch(sellIceCream(6))
// unsubsribe()
