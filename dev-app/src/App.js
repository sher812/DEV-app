import React from 'react';
import logo from './logo.svg';
import './App.css';
//import './components/timer/timer';
import TimerCircle from './components/timer/timerCircle';
import TimerDig from './components/timer/timerDig';

function App() {
  return (
    <div className="App">
      <div className="App-body">

      {/*  /!*<p>*!/*/}
      {/*  /!*  Edit <code>src/App.js</code> and save to reload.*!/*/}
      {/*  /!*</p>*!/*/}
      {/*  /!*<a*!/*/}
      {/*  /!*  className="App-link"*!/*/}
      {/*  /!*  href="https://reactjs.org"*!/*/}
      {/*  /!*  target="_blank"*!/*/}
      {/*  /!*  rel="noopener noreferrer"*!/*/}
      {/*  /!*>*!/*/}
      {/*  /!*  Learn React*!/*/}
      {/*  /!*</a>*!/*/}
      {/*  anything*/}
          <div className="appIcon" >
              <i className="fas fa-hourglass fa-2x"/>
          </div>
          <TimerDig />
          <TimerCircle />
      </div>
    </div>
  );
}

export default App;
