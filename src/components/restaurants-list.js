import React, { useEffect } from "react"
import Restaurant from "./restaurant"
import accordionDecorator from "../decorators/accordion"
import { List } from "antd"
import { connect } from "react-redux"
import { filtratedRestaurantsSelector } from "../selectors"
import { loadAllRestaurants } from "../ac"

function RestaurantsList({
  restaurants,
  isItemOpen,
  toggleOpenItem,
  loadAllRestaurants,
}) {
  useEffect(() => {
    loadAllRestaurants()
  }, [])
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

export default connect(
  (state) => {
    console.log("---", "connect")
    return {
      restaurants: filtratedRestaurantsSelector(state),
    }
  },
  {
    loadAllRestaurants,
  },
)(accordionDecorator(RestaurantsList))
