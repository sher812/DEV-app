import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./timerStyle.css";

const renderTime = ({ remainingTime }) => {
  let hours = Math.floor(remainingTime / 3600);
  let minutes = Math.floor((remainingTime / 60) % 60);
  return (
    <div className="timer">
      <div className="value">{hours < 10 ? '0' : ''}{hours}:{minutes < 10 ? '0' : ''}{minutes}</div>
    </div>
  );
};

class TimerComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {countdownTime: this.props.countdownTime ,count: this.props.count};
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    console.log(this.state.count);
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    if(this.state.count % 2 === 0) {
      return (<div className="timer-wrapper">
      <CountdownCircleTimer
          onComplete={() => {
            this.updateCount();
            this.props.popup( '0' );
            return [true, 0];
          }} 
        isPlaying = {true}
        duration={this.state.countdownTime}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      >
      {renderTime}
      </CountdownCircleTimer>
      </div>)
    } else {
      return (<div className="timer-wrapper">
      <CountdownCircleTimer
          onComplete={() => {
            this.updateCount();
            this.props.popup( '0' );
          }} 
        isPlaying = {false}
        duration={this.state.countdownTime}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      >
      <button onClick={this.updateCount} className="btn btn-primary">
        Start
      </button>
      </CountdownCircleTimer>
      </div>)
  }
  }
}

export default TimerComplete;