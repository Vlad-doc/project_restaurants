import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React from "react"
import { connect } from "react-redux"
import { addItem, removeItem } from "../ac"

function Dish(props) {
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
              onClick={() => props.handleDecrease(props.id)}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => props.handleIncease(props.id)}
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

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.id] || 0,
})

const mapDispatchToprops = {
  handleDecrease: removeItem,
  handleIncease: addItem,
}

export default connect(mapStateToProps, mapDispatchToprops)(Dish)
