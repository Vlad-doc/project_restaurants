import { v4 as uuid } from "uuid"

export default (store) => (next) => (action) => {
  if (!action.generateId) return next(action)

  next({
    ...action,
    id: uuid(),
  })
}
