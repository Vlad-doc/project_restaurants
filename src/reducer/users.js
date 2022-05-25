import { Record } from "immutable"
import { normalizedUsers } from "../fixtures"
import { arrToMap } from "../utils"

const UserRecord = Record({
  id: null,
  name: null,
})

const ReduceRecord = Record({
  entities: arrToMap(normalizedUsers, UserRecord),
})

export default (usersState = new ReduceRecord(), { type }) => {
  switch (type) {
    default:
      return usersState
  }
}
