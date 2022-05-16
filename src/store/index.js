import reducer from "../reducer"
import { applyMiddleware } from "redux"
import logger from "../middlewares"
import generateId from "../middlewares/generateId"

const enhancer = applyMiddleware(generateId, logger)
const { createStore } = require("redux")

const store = createStore(reducer, enhancer)

export default store
