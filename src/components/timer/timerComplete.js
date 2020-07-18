import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerDigital from './timerDigital';

import "./timerStyle.css";

function TimerComplete() {
  return (
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={40}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          <TimerDigital />
        </CountdownCircleTimer>
      </div>
  );
}


export default TimerComplete;