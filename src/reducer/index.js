import { combineReducers } from "redux"
import order from "./order"
import restaurants from "./restaurants"
import filters from "./filters"
import dishes from "./dishes"
import users from "./users"
import reviews from "./reviews"

export default combineReducers({
  order,
  restaurants,
  filters,
  dishes,
  users,
  reviews,
})
