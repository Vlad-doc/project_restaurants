import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import order from "./order"
import filters from "./filters"
import restaurants from "./restaurants"
import dishes from "./dishes"
import reviews from "./reviews"
import users from "./users"
import history from "../history"

export default combineReducers({
  order,
  filters,
  restaurants,
  dishes,
  users,
  reviews,
  router: connectRouter(history),
})
