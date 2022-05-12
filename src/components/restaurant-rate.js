import { Rate } from "antd"
import React, { Component } from "react"
import { getAverageRate } from "../utils"

export class RestaurantRate extends Component {
  state = {
    rate: getAverageRate(this.props.restaurant),
  }
  render() {
    return (
      <Rate
        value={this.state.value}
        onChange={(rate) => this.setState({ rate })}
      />
    )
  }
}

export default RestaurantRate
