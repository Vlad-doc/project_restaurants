import { Button } from "antd"
import React from "react"

function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        width={64}
        height={64}
      />
      <div>Menu items: {restaurant.menu.length}</div>{" "}
    </>
  )

  return (
    <div>
      <h3>{restaurant.name}</h3>
      {body}
      <Button type="primary" onClick={onBtnClick}>
        {isOpen ? "close" : "open"}
      </Button>
    </div>
  )
}

export default Restaurant
