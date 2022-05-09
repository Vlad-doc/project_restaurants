import React from "react"
import Restaurant from "./restaurant"

function RestaurantsList({ restaurants }) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}

export default RestaurantsList
