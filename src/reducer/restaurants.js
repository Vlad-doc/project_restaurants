import { ADD_REVIEW, LOAD_ALL_RESTAURANTS } from "../constants"

import { arrToMap } from "../utils"

const defaultRestaurants = arrToMap([])

export default (
  state = defaultRestaurants,
  { type, payload, id, response },
) => {
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
    case LOAD_ALL_RESTAURANTS:
      return arrToMap(response)
    default:
      return state
  }
}
