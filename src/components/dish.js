import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React from "react"

function Dish(props) {
  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span style={{ margin: "0 12px" }}>{0}</span>
          <Button.Group>
            <Button type="primary" shape="circle" icon={<MinusOutlined />} />
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
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

export default Dish
