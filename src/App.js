import Cart from "./components/cart"
import Filter from "./components/filter"
import OrderForm from "./components/order-form"
import RestaurantsList from "./components/restaurants-list"

function App() {
  return (
    <div>
      <h2>Restaurants list</h2>
      <Filter />
      <RestaurantsList />
      <OrderForm />
      <Cart />
    </div>
  )
}

export default App
