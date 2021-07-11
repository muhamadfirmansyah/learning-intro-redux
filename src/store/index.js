import { createStore, combineReducers } from 'redux'

// Import React DevTools
import { composeWithDevTools } from 'redux-devtools-extension'

// ACTION
export const add = (title) => {
    return {
        type: 'ADD', // huruf besar,
        payload: title, // data yang dikirim ke requesannya
    }
}

// Buat Initial State
const initialState = {
    todos: [
        {
            id: 1,
            title: 'Learning React with Redux'
        }
    ]
}

// REDUCER
const listReducer = (state = initialState, action) => {

    // distructure
    const { type, payload } = action

    switch (type) {
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }

            return {
                ...state,
                todos: [...state.todos, newItem]
            }

        default:
            return state
    }
}

// combineReducers : berfungsi menggabungkan reducer-reducer
const rootReducer = combineReducers({
    lists: listReducer
})

// STORE
// createStore : Untuk membuat storenya, dan createStore butuh reducer
const store = createStore(rootReducer, composeWithDevTools()) // lalu parsing

export default store; // lalu export storenya