import React from 'react';
import './App.css';
import MainApplicationPage from "./components/mainApplicationPage";

function App() {
  return (
      <div className="App">
          <div className="App-body">
              <button type="button" className="appIcon btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  <i className="fas fa-hourglass fa-2x"/>
              </button>
          </div>

          <MainApplicationPage />
    </div>
  );
}

export default App;
