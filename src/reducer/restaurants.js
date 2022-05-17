import { ADD_REVIEW } from "../constants"
import { normalizedRestaurants } from "../fixtures"
import { arrToMap } from "../utils"

const defaultRestaurants = arrToMap(normalizedRestaurants)

export default (state = defaultRestaurants, { type, payload, id }) => {
  switch (type) {
    case ADD_REVIEW:
      const restaurant = state[payload.restaurantId]
      return {
        ...state,
        [payload.restaurantId]: {
          ...restaurant,
          reviews: restaurant.reviews.concat(id),
        },
      }
    default:
      return state
  }
}
