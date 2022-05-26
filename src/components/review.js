import React, { useContext } from "react"
import { Comment, Rate } from "antd"
import { connect } from "react-redux"
import { reviewSelector } from "../selectors"
import { Consumer, userContext } from "../contexts/username"

function Review({ review }) {
  const username = useContext(userContext)
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white",
      }}
      author={username}
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
