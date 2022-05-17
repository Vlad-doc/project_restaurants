import { Button, Input, Rate } from "antd"
import React, { useState } from "react"
import { connect } from "react-redux"
import { addReview } from "../ac"
import { useInputValue } from "../custom-hooks/use-input-value"

function ReviewForm({ submitReview }) {
  const [text, setText] = useInputValue()
  const [rating, setRating] = useState()
  const handleSubmit = (ev) => {
    ev.preventDefault()
    submitReview({ text, rating })
  }
  return (
    <form onSubmit={handleSubmit}>
      Text: <Input value={text} onChange={setText} />
      <Rate value={rating} onChange={setRating} />
      <Button type="primary" htmlType="submit">
        Submit Review
      </Button>
    </form>
  )
}

export default connect(null, (dispatch, { restaurantId }) => ({
  submitReview: (review) => dispatch(addReview(review, restaurantId)),
}))(ReviewForm)
