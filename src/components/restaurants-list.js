import React from "react"
import Restaurant from "./restaurant"
import accordionDecorator from "../decorators/accordion"
import { List } from "antd"
import { connect } from "react-redux"
import { filtratedRestaurantSelector } from "../selectors"

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

export default connect((state) => ({
  restaurants: filtratedRestaurantSelector(state),
}))(accordionDecorator(RestaurantsList))
