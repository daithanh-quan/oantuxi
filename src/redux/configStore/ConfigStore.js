import { combineReducers, createStore } from 'redux'
import RockPaperScissorsRC from '../Reducer/RockPaperScissorsRC'

const RootReducer = combineReducers({
  // redux
  RockPaperScissorsRC
})
export const store = createStore(RootReducer)