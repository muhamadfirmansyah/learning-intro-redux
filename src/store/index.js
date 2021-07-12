import { createStore } from 'redux'

// Import React DevTools
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

// STORE
// createStore : Untuk membuat storenya, dan createStore butuh reducer
const store = createStore(rootReducer, composeWithDevTools()) // lalu parsing

export default store; // lalu export storenya