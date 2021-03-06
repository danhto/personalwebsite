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
import MDBPanelStarwars from './components/MDBPanel/MDBPanelStarwars';
import './components/MDBPanel/MDBPanelStarwars.css'
import Sorter from './components/Sorter/Sorter';
import './components/Sorter/Sorter.css';

ReactDOM.render(<BrowserRouter>
                    <div>
                        <Navigation />
                        <div className='main-content'>
                            <div className='main-panel-content'>
                                <Switch>
                                    <Route exact path='/personalwebsite' component={App} />
                                    <Route path='/personalwebsite/about' component={Aboutme} />
                                    <Route path='/personalwebsite/links' component={Links} />
                                    <Route path='/personalwebsite/apps' component={Sorter} />
                                </Switch>
                            </div>
                            <div className='side-panel-content'>
                                <MDBPanel />
                                <MDBPanelStarwars api="people"/>
                                <MDBPanelStarwars api="starships"/>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
