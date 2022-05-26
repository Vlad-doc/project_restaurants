import { Button, List } from "antd"
import React from "react"
import useToggler from "../custom-hooks/use-toggle-open"
import { Translate } from "../locale/context"
import Review from "./review"
import ReviewForm from "./review-form"

function ReviewList({ restaurant }) {
  const { isOpen, toggleOpen } = useToggler()
  const body = isOpen && (
    <div>
      <List
        dataSource={restaurant.reviews}
        renderItem={(reviewId) => (
          <List.Item key={reviewId}>
            <Review id={reviewId} />
          </List.Item>
        )}
      />
      <ReviewForm restaurantId={restaurant.id} />
    </div>
  )
  return (
    <div>
      {body}
      <Button onClick={toggleOpen}>
        <Translate>{isOpen ? "hide reviews" : "show reviews"}</Translate>
      </Button>
    </div>
  )
}

export default ReviewList
