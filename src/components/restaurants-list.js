import React from "react"
import Restaurant from "./restaurant"
import accordionDecorator from "../decorators/accordion"
import { List } from "antd"

function RestaurantsList({ restaurants, isItemOpen, toggleOpenItem }) {
  return (
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
        />
      ))}
    </List>
  )
}

export default accordionDecorator(RestaurantsList)
