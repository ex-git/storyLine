import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './nav.scss'

import {handleLogin, handleLogout} from '../actions'

import {connect} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

class nav extends Component {
  componentWillMount(){
    //check if cookie contain user info
    document.cookie.match(/^user/) && this.props.dispatch(handleLogin({
      name: document.cookie.match(/^user/).input.split('=').slice(-1)[0]}
      )
    )
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout())
    this.props.history.push('/')
  }
  render () {
    if(this.props.auth) {
      return (
        <nav role='navigation'>
            <Link to='/' className='homeLink'>{<FontAwesomeIcon icon={faChild} size='2x'/>}Story Line</Link>
            <ul className='manuLinks'>
                <li key='3'><Link to='/profile'>My Profile</Link></li>
                <li key='4'><Link to='/timeline'>Time Line</Link></li>
                <li key='5'><Link to='/newmoment'>New Moment</Link></li>
                <li key='6' onClick={(e)=>this.logout(e)}>Log Out</li>
            </ul>
        </nav>
      )
    }
    else {
      return (
        <nav role='navigation'>
            <Link to='/' className='homeLink'>{<FontAwesomeIcon icon={faChild} size='2x'/>}Story Line</Link>
            <ul className='manuLinks'>
                <li key='1'><Link to='/login'>Log In</Link></li>
                <li key='2'><Link to='/register'>Create Account</Link></li>
            </ul>
        </nav>
      )
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps)(nav))
