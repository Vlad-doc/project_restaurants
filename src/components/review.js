import React from "react"
import { Comment, Rate } from "antd"
import { connect } from "react-redux"
import { reviewSelector } from "../selectors"
import { Consumer } from "../contexts/username"

function Review({ review }) {
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white",
      }}
      author={review.user}
      content={review.text}
      actions={[
        <div>
          <Rate
            disabled
            defaultValue={review.rating}
            style={{ marginLeft: "24px" }}
          />
          <Consumer>{(username) => <h3>{username}</h3>}</Consumer>
        </div>,
      ]}
    />
  )
}

export default connect((state, ownProps) => ({
  review: reviewSelector(state, ownProps),
}))(Review)
