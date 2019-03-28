import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './nav'
import Landing from './landing'
import Timeline from './timeline'
import NewMoment from './newMoment'
import Login from './login'
import Register from './register'
import Profile from './profile'

import './app.scss'

export default function app() {
  return (
      <BrowserRouter>
        <main role='main'>
          <Nav />
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/profile' component={Profile}/>
              <Route exact path='/timeline' component={Timeline}/>
              <Route exact path='/newmoment' component={NewMoment}/>
            </Switch>
        </main>
      </BrowserRouter>
    
  )
}
