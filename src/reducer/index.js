import { combineReducers } from "redux"
import order from "./order"
import restaurants from "./restaurants"
import filters from "./filters"

export default combineReducers({
  order,
  restaurants,
  filters,
})
