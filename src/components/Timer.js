import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0,
    }
    this.tick = this.tick.bind(this)
  }
  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
      </div>
    );
  }
}

export default class ToggleTimer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        showTimer: true
      }
      this.toggleTimer = this.toggleTimer.bind(this)
    }
    toggleTimer() {
      this.setState({
        showTimer: !this.state.showTimer
      })
    }
    render() {
      return (
        <div >
          <button onClick={this.toggleTimer}>Toggle Timer</button>
          {this.state.showTimer ? <Timer />: null}
        </div>
      );
    }
}
