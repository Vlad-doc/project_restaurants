import { Record } from "immutable"
import { arrToMap } from "../utils"

const UserRecord = Record({
  id: null,
  name: null,
})

const ReduceRecord = Record({
  entities: arrToMap([], UserRecord),
})

export default (usersState = new ReduceRecord(), { type }) => {
  switch (type) {
    default:
      return usersState
  }
}
