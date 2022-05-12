import { Rate } from "antd"
import React, { Component } from "react"

export class RestaurantRate extends Component {
  state = {
    rate: getDefaultRate(this.props.restaurant),
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

function getDefaultRate(restaurant) {
  return restaurant.reviews
    .map((review) => review.rating)
    .filter((rate) => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0)
}
