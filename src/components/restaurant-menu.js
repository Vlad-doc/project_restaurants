import { Col, Row } from "antd"
import React from "react"
import Dish from "./dish"

function RestaurantMenu({ menu }) {
  return (
    <div style={{ padding: "16px" }}>
      <Row gutter={16}>
        {menu.map((dish) => (
          <Col key={dish.id} span={8}>
            <Dish {...dish} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RestaurantMenu
