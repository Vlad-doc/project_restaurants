import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "antd/dist/antd.css"
import { Provider } from "react-redux"
import store from "./store"
import { ConnectedRouter } from "connected-react-router"
import history from "./history"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
)
