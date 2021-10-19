
import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import historyWatch from "./historyWatch";

const rootReducer  = combineReducers({
    bookmarks,
    historyWatch
})

export default rootReducer;