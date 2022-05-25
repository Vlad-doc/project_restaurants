import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React from "react"
import { connect } from "react-redux"
import { addItem, removeItem } from "../ac"
import { dishSelector } from "../selectors"

function Dish({ dish, amount, handleIncease, handleDecrease }) {
  return (
    <Card
      bordered
      actions={[
        `$${dish.price}`,
        <>
          <span style={{ margin: "0 12px" }}>{amount}</span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon={<MinusOutlined />}
              onClick={() => handleDecrease(dish.id)}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => handleIncease(dish.id)}
            />
          </Button.Group>
        </>,
      ]}
    >
      <Card.Meta title={dish.name} description={dish.ingredients.join(", ")} />
    </Card>
  )
}

const mapStateToProps = (state, ownProps) => ({
  amount: state.order.get(ownProps.id) || 0,
  dish: dishSelector(state, ownProps),
})

const mapDispatchToprops = {
  handleDecrease: removeItem,
  handleIncease: addItem,
}

export default connect(mapStateToProps, mapDispatchToprops)(Dish)
