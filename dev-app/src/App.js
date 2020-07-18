import React from 'react';
import './App.css';
import MainApplicationPage from "./components/mainApplicationPage";

function App() {
  return (
      <div className="App">
          <div className="App-body">
              <div className="appIcon" >
                  <i className="fas fa-hourglass fa-2x"/>
              </div>
          </div>

          <MainApplicationPage />
    </div>
  );
}

export default App;
