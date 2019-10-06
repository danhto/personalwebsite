import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MDBBtn, MDBNavLink} from 'mdbreact'

const App = () => {
    const [visible, setVisible] = useState(false)
    const toggle = () => {
        setVisible(!visible)
    }

    return (
        
        <div className="app-main-content">
            <div className="app-main-header">
                <h2> Welcome! </h2>
            </div>
            <div className="app-main-text">
                <p> You've arrived at the one stop shop for everything Dan To. </p>
            </div>
            {visible ?
                <div className="app-main-hidden-content">
                    <MDBNavLink to="/personalwebsite/about">TELL ME MORE!</MDBNavLink>
                </div>
            : null }
            <div className="app-main-logo">
                <MDBBtn outline onClick={toggle}>
                    <img src={logo} className="App-logo" alt="logo" />
                </MDBBtn>
            </div>
        </div>
    );
}

export default App;
