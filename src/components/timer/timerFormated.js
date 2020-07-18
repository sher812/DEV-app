import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerDigital from './timerDigital';
import TimerComplete from './timerComplete';

import "./timerStyle.css";

class TimerC extends React.Component {

    render() {
        return <div>
            <TimerComplete countdownTime = {5}/>
            <TimerDigital countdownTime = {5}/>
        </div>
        
    }
}

export default TimerC