import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerDigital from './timerDigital';

import "./timerStyle.css";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer">
      <div className="value">{Math.floor(remainingTime / 3600)}:{Math.floor((remainingTime / 60) % 60)}</div>
    </div>
  );
};

class TimerComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {intervals: [this.props.countdownTime, this.props.countdownTime/2], count: 0};
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
            console.log("Here");
          }} 
        isPlaying = {true}
        duration={this.state.intervals[this.state.count % 2]}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      >
      {renderTime}
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
        {renderTime}
        </CountdownCircleTimer>
     
    }
  }
}

export default TimerComplete;