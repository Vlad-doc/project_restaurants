import React from "react"
import Restaurant from "./restaurant"
import { useAccordion } from "../custom-hooks/use-accordion"

function RestaurantsList({ restaurants }) {
  const { isItemOpen, toggleOpenItem } = useAccordion()
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
        />
      ))}
    </div>
  )
}

export default RestaurantsList
