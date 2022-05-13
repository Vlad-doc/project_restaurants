import { createSelector } from "reselect"
import { getAverageRate } from "../utils"

const restaurantsSelector = (state) => state.restaurants
const filtersSelector = (state) => state.filters

export const filtratedRestaurantSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  (restaurants, filters) => {
    return restaurants.filter(
      (restaurant) => getAverageRate(restaurant) >= filters.minRating,
    )
  },
)
