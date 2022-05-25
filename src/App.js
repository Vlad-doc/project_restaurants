import Cart from "./components/cart"
import Filter from "./components/filter"
import OrderForm from "./components/order-form"
import RestaurantsPage from "./components/routes/restaurants"
import { Route, NavLink } from "react-router-dom"

function App() {
  return (
    <div>
      <h2>Restaurants list</h2>
      <NavLink to="/checkout">
        <Cart />
      </NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/filter">Filter</NavLink>

      <Route path="/filter" component={Filter} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route path="/checkout" component={OrderForm} />
    </div>
  )
}

export default App
