import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/timer';
import MyComponent from './components/timer';

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
      </div>
    </div>
  );
}

export default App;
