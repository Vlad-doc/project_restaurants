import React from "react"
import { Avatar, List } from "antd"
import ReviewList from "./review-list"
import RestaurantMenu from "./restaurant-menu"

import RestaurantRate from "./restaurant-rate"
import { connect } from "react-redux"
import { restaurantSelector } from "../selectors"

function Restaurant({ restaurant, isOpen }) {
  if (!restaurant) return null

  const body = isOpen && (
    <div data-id="restaurant-body">
      <RestaurantMenu restaurant={restaurant} />
      <ReviewList restaurant={restaurant} />
    </div>
  )
  return (
    <List.Item style={{ paddingLeft: "8px" }}>
      <List.Item.Meta
        avatar={<Avatar shape="square" src={restaurant.image} />}
        title={restaurant.name}
      />
      <RestaurantRate restaurant={restaurant} />
      {body}
    </List.Item>
  )
}

export default connect((state, ownProps) => ({
  restaurant: restaurantSelector(state, ownProps),
}))(Restaurant)
