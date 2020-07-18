import React from 'react';
import './App.css';
import MainApplicationPage from "./components/mainApplicationPage";
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

                <MainApplicationPage
                    changePopup = { ( typeIndex ) => this.showPopup( typeIndex ) }/>

                <PopupMessage
                    type={ this.state.popupType }
                    changePopup={ ( typeIndex ) => this.showPopup( typeIndex ) }
                />
            </div>
        );
    }

}

export default App;
