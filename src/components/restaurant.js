import React from "react"

function Restaurant({ restaurant }) {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        width={64}
        height={64}
      />
      <div>{restaurant.menu.length}</div>
    </div>
  )
}

export default Restaurant
