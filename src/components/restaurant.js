import { Avatar, Button, List } from "antd"
import React from "react"
import RestaurantMenu from "./restaurant-menu"
import ReviewList from "./review-list"

function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div>
      <RestaurantMenu menu={restaurant.menu} />
      <ReviewList reviews={restaurant.reviews} />
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
      {body}
    </List.Item>
  )
}

export default Restaurant
