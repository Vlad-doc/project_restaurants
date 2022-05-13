import { combineReducers } from "redux"
import order from "./order"
import restaurants from "./restaurants"
import filters from "./filters"
import dishes from "./dishes"

export default combineReducers({
  order,
  restaurants,
  filters,
  dishes,
})
