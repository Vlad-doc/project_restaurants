import React from "react"
import { Button, Input } from "antd"
import { useInputValue } from "../custom-hooks/use-input-value"

function OrderForm() {
  const [name, setName] = useInputValue()
  const [telephone, setTelephone] = useInputValue()
  const [address, setAddress] = useInputValue()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log("---", name, telephone, address)
  }
  return (
    <form onSubmit={handleSubmit}>
      Name: <Input value={name} onChange={setName} />
      Telephone: <Input value={telephone} onChange={setTelephone} />
      Address: <Input value={address} onChange={setAddress} />
      <Button htmlType="submit">Order</Button>
    </form>
  )
}

export default OrderForm
