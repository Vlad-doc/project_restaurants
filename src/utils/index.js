import { OrderedMap } from "immutable"

export const getAverageRate = (restaurant) =>
  restaurant.reviews
    .map((review) => review.rating)
    .filter((rate) => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0)

export const arrToMap = (arr, Model) =>
  arr.reduce(
    (acc, item) => acc.set(item.id, new Model(item)),
    new OrderedMap({}),
  )
