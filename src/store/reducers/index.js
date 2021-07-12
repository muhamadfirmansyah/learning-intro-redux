import { combineReducers } from 'redux' 
import listReducer from './lists'
import productReducer from './products'

// combineReducers : berfungsi menggabungkan reducer-reducer
export default combineReducers({
    lists: listReducer,
    products: productReducer
})