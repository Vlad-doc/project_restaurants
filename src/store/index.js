import reducer from "../reducer"
import { applyMiddleware } from "redux"
import logger from "../middlewares"

const enhancer = applyMiddleware(logger)
const { createStore } = require("redux")

const store = createStore(reducer, enhancer)

export default store
