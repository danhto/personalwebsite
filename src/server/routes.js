import React from 'react'
import {Route} from 'react-router'

import App from '../App'
import Aboutme from '../components/Aboutme/Aboutme'

export default (
    <Route path="/" component={App}>
        <Route path="/home" component={Aboutme} />
    </Route>
)