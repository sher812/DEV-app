import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerDigital from './timerDigital';

import "./timerStyle.css";


class TimerComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {countdownTime: this.props.countdownTime, count: 0, intervals: [5,2,5]};
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }


  render() {
    if(this.state.count % 2 == 0) {
      return <div className="timer-wrapper">
      <CountdownCircleTimer
          onComplete={() => {
            // do your stuff here
            this.updateCount();
          }} 
        isPlaying = {true}
        duration={this.state.intervals[this.state.count % 2]}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      >
      <h1> A </h1>
      </CountdownCircleTimer>
      </div>
    } else {
      return <CountdownCircleTimer
         onComplete={() => {
        // do your stuff here
        this.updateCount();
        return [true, 0] // repeat animation in 1.5 seconds
         }} 
         isPlaying = {true}
        duration={this.state.intervals[this.state.count % 2]}
        colors={[["#000000"]]}
  >
  <h1> B </h1>
  </CountdownCircleTimer>
      
    }
  }
}

export default TimerComplete;