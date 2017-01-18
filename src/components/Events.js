import React from 'react'

export default class Events extends React.Component {
  constructor(props) {
    super(props)
    this.eventHandler = this.eventHandler.bind(this)
  }
  eventHandler(e) {
    console.log(e.type)
  }
  render() {
    return (
      <div>
        <div onClick={this.eventHandler}>click</div>
        <div
          onMouseEnter={this.eventHandler}
          onMouseOver={this.eventHandler}
          onMouseLeave={this.eventHandler}
        >
          Mouse Events
        </div>
        <input
          onChange={this.eventHandler}
          onKeyDown={this.eventHandler}
          onFocus={this.eventHandler}
          onBlur={this.eventHandler} />
      </div>
    )
  }
}
