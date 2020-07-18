import React from "react";
import Countdown from "react-countdown";

class TimerDigital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {countdownTime: this.props.countdownTime};
  }


  render() {
    return <Countdown date={Date.now() + this.state.countdownTime * 1000} renderer={renderer} />
  }
}

// Random component
const Completionist = () => <span>Times Up!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

// function TimerDigital() {
//   return <Countdown date={Date.now() + 1000} renderer={renderer} />
// }

export default TimerDigital