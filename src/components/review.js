import { Comment, Rate } from "antd"
import React from "react"
import { connect } from "react-redux"
import { reviewSelector } from "../selectors"

function Review({ review }) {
  return (
    <Comment
      style={{ margin: "16px", backgroundColor: "white" }}
      author={review.user}
      content={review.text}
      actions={[
        <Rate
          disabled
          defaultValue={review.rating}
          style={{ marginLeft: "24px" }}
        />,
      ]}
    />
  )
}

export default connect((state, ownProps) => ({
  review: reviewSelector(state, ownProps),
}))(Review)
