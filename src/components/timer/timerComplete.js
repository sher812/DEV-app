import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerDigital from './timerDigital';

import "./timerStyle.css";

class TimerComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {countdownTime: this.props.countdownTime};
  }

  render() {
    return <div className="timer-wrapper">
    <CountdownCircleTimer
      isPlaying
      duration={this.state.countdownTime}
      colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      onComplete={() => [true, 1000]}
    >
    </CountdownCircleTimer>
  </div>
  }
}

export default TimerComplete;