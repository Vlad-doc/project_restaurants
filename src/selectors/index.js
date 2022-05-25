import { createSelector } from "reselect"

const restaurantsSelector = (state) => state.restaurants.get("entities")
const filtersSelector = (state) => state.filters
const reviewsSelector = (state) => state.reviews
export const dishSelector = (state, { id }) =>
  state.dishes.getIn(["entities", id])
export const reviewSelector = (state, { id }) =>
  state.reviews.getIn(["entities", id])

export const totalAmountSelector = (state) =>
  state.order.valueSeq().reduce((acc, amount) => acc + amount, 0)

export const totalPriceSelector = (state) =>
  state.order.reduce(
    (acc, amount, id) => acc + dishSelector(state, { id }).price * amount,
    0,
  )

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  reviewsSelector,
  (restaurants, filters, reviews) =>
    restaurants
      .valueSeq()
      .toArray()
      .filter(
        (restaurant) =>
          avarageRateSelector({ reviews }, { restaurant }) >= filters.minRating,
      ),
)

export const avarageRateSelector = (state, { restaurant }) =>
  restaurant.reviews
    .map((id) => reviewSelector(state, { id }).rating)
    .filter((rate) => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0)
