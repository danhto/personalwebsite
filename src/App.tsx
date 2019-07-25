import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MDBBtn} from 'mdbreact'

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
                    <MDBBtn gradient="blue" href='/about'>
                        <h1><i>TELL ME MORE!</i></h1>
                    </MDBBtn>  
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
