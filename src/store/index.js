import reducer from "../reducer"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import logger from "../middlewares"
import generateId from "../middlewares/generateId"
import api from "../middlewares/api"

const enhancer = applyMiddleware(thunk, generateId, logger, api)
const { createStore } = require("redux")

const store = createStore(reducer, enhancer)

export default store
