import { Rate } from "antd"
import React, { Component } from "react"
import { connect } from "react-redux"
import { avarageRateSelector } from "../selectors"

export class RestaurantRate extends Component {
  render() {
    return <Rate value={this.props.rate} disabled />
  }
}

export default connect((state, ownProps) => ({
  rate: avarageRateSelector(state, ownProps),
}))(RestaurantRate)
