import { getAverageRate } from "../utils"

export const filtratedRestaurantSelector = ({ restaurants, filters }) => {
  return restaurants.filter(
    (restaurant) => getAverageRate(restaurant) >= filters.minRating,
  )
}
