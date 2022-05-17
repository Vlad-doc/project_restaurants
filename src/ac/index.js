import { ADD_ITEM, ADD_REVIEW, REMOVE_ITEM, SET_MIN_RATING } from "../constants"

export const addItem = (id) => ({
  type: ADD_ITEM,
  payload: { id },
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
})

export const setMinRating = (minRating) => ({
  type: SET_MIN_RATING,
  payload: { minRating },
})

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true,
})
