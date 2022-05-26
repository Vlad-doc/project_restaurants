import React from "react"
import { Translate } from "../../locale/context"
import MenuItem from "./menu-item"

function Menu({ children }) {
  return (
    <div>
      <Translate>
        <h1>Delivery App</h1>
      </Translate>
      {children}
    </div>
  )
}

Menu.propTypes = {}

Menu.Item = MenuItem

export { MenuItem }
export default Menu
