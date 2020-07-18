import React from 'react';
import './App.css';
import MainApplicationPage from "./components/mainApplicationPage";
<<<<<<< HEAD
import PopupMessage from "./components/PopupMessage";

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            popupType: '0',
        }
    }

    showPopup( typeIndex ) {

        if ( typeIndex ) {
            document.getElementById( 'popupMessageBox' ).style.display = 'block';
            this.setState({
                popupType: typeIndex
            })
        } else {
            // dismiss the popup
            document.getElementById( 'popupMessageBox' ).style.display = 'none';
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-body">
                    <button type="button" className="appIcon btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <i className="fas fa-hourglass fa-2x"/>
                    </button>
                </div>

                <MainApplicationPage />

                <PopupMessage
                    type={ this.state.popupType }
                    changePopup={ ( typeIndex ) => this.showPopup( typeIndex ) }
                />
            </div>
        );
    }

=======
import './components/timer/timerComplete';
import TimerComplete from './components/timer/timerComplete';

import './components/timer/timerDigital';
import TimerDigital from './components/timer/timerDigital';
import TimeC from './components/timer/timerFormated';

const toggle = ({}) => {
  console.log("H");
  return <TimerComplete countdownTime = {6} count = {1} />
}

function App() {
  return (
      <div className="App">
          <div className="App-body">
              <button type="button" className="appIcon btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  <i className="fas fa-hourglass fa-2x"/>
              </button>

              <TimerComplete countdownTime = {6} count = {0} />
              {/* <TimerDigital countdownTime = {60}/> */}

              {/* <TimeC /> */}

              <button onClick= {toggle}>
                <h1> HI </h1>
              </button>
          </div>

          <MainApplicationPage />
    </div>
  );
>>>>>>> Button to change state
}

export default App;
