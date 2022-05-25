import { Avatar, Button, List } from "antd"
import React from "react"
import RestaurantMenu from "./restaurant-menu"
import RestaurantRate from "./restaurant-rate"
import ReviewList from "./review-list"

function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div>
      <RestaurantMenu restaurant={restaurant} />
      <ReviewList restaurant={restaurant} />
    </div>
  )

  return (
    <List.Item
      style={{ paddingLeft: "8px" }}
      actions={[
        <Button onClick={onBtnClick}>
          {isOpen ? "Hide menu" : "Show menu"}
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar shape="square" src={restaurant.image} />}
        title={restaurant.name}
      />
      <RestaurantRate restaurant={restaurant} />
      {body}
    </List.Item>
  )
}

export default Restaurant
