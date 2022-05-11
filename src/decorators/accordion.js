import React from "react"

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null,
    }
    isItemOpen = (id) => this.state.openItemId === id
    toggleOpenItem = (openItemId) => () =>
      this.setState({
        openItemId,
      })
    render() {
      return (
        <OriginalComponent
          {...this.props}
          isItemOpen={this.isItemOpen}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
