import React from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>Times Up!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}
      </span>
    );
  }
};

function TimerDig () {
    return <Countdown date={Date.now() + 100000 } renderer={renderer} />
}
export default TimerDig