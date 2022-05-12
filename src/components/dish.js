import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React from "react"
import { connect } from "react-redux"

function Dish(props) {
  const handleIncease = () => props.dispatch({ type: "increment" })
  const handleDecrease = () => props.dispatch({ type: "decrement" })
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span style={{ margin: "0 12px" }}>{props.amount}</span>
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon={<MinusOutlined />}
              onClick={handleDecrease}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={handleIncease}
            />
          </Button.Group>
        </>,
      ]}
    >
      <Card.Meta
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  )
}

const mapStateToProps = (state) => ({
  amount: state.count,
})

const mapDispatchToprops = {}

export default connect(mapStateToProps)(Dish)
