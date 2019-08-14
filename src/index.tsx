import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Aboutme from './components/Aboutme/Aboutme'
import Links from './components/Links/Links'
import Navigation from './components/Navigation/Navigation'
import MDBPanel from './components/MDBPanel/MDBPanel'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './components/MDBPills/MDBPills.css'
import './components/MDBJumbotron/MDBJumbotron.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
import './components/Links/Links.css'

ReactDOM.render(<BrowserRouter>
                    <div>
                        <Navigation />
                        <div className='main-content'>
                            <div className='main-panel-content'>
                                <Switch>
                                    <Route exact path='/' component={App} />
                                    <Route path='/about' component={Aboutme} />
                                    <Route path='/links' component={Links} />
                                </Switch>
                            </div>
                            <div className='side-panel-content'>
                                <MDBPanel />
                            </div>
                        </div>
                    </div>
                </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
