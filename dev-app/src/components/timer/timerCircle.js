import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerDig from './timerDig';

import "./timerStyle.css";

function TimerCircle() {
  return (
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={40}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          <TimerDig />
        </CountdownCircleTimer>
      </div>
  );
}


export default TimerCircle;