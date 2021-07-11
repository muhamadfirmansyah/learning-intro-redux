import { createStore, combineReducers } from 'redux'

// Import React DevTools
import { composeWithDevTools } from 'redux-devtools-extension'

// Buat Initial State
const initialState = {
    todos: [
        {
            id: 1,
            title: 'Learning React with Redux'
        }
    ]
}

// Buat Reducer
const listReducer = (state = initialState, action) => {

    // distructure
    const { type } = action

    switch (type) {
        default:
            return state
    }
}

// combineReducers : berfungsi menggabungkan reducer-reducer
const rootReducer = combineReducers({
    lists: listReducer
})

// createStore : Untuk membuat storenya, dan createStore butuh reducer
const store = createStore(rootReducer, composeWithDevTools()) // lalu parsing

export default store; // lalu export storenya