import OrderForm from "./components/order-form"
import RestaurantsList from "./components/restaurants-list"
import { restaurants } from "./fixtures"

function App() {
  return (
    <div>
      <h2>Restaurants list</h2>
      <RestaurantsList restaurants={restaurants} />
      <OrderForm />
    </div>
  )
}

export default App
