import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './nav.scss'

import {handleLogin, handleLogout, isMobile, burgetMemu} from '../actions'

import {connect} from 'react-redux'

import menuIcon from './img/menu.svg'

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

  burgetMemuToggle = () => {
    this.props.dispatch(burgetMemu(!this.props.burgerMemu))
  }

  burgetMemuReset = () => {
    this.props.burgerMemu && this.props.dispatch(burgetMemu(!this.props.burgerMemu))
  }

  isMobileCheck = ()=> {
    this.props.dispatch(isMobile(window.innerWidth<800))
  }

  componentDidMount() {
    this.props.dispatch(isMobile(window.innerWidth<800))
    window.addEventListener('resize', this.isMobileCheck);
    // document.querySelector('ul').addEventListener('click', this.burgetMemuReset);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isMobileCheck);
    // document.querySelector('ul').removeEventListener('click', this.burgetMemuReset);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.burgerMemu && this.props.dispatch(burgetMemu(!this.props.burgerMemu))
    }
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout())
    this.props.history.push('/')
  }

  render() {
    if(this.props.auth) {
      return (
        <nav role='navigation' >
            <Link to='/' className='homeLink'>{<FontAwesomeIcon icon={faChild} size='2x'/>}Story Line</Link>
            <button onClick={this.burgetMemuToggle} className="burger_memu" href="" style={{'visibility': this.props.mobile ? 'visible' :'hidden', 'transform': this.props.burgerMemu? 'rotate(90deg)' : 'none'}}>
              <img src={menuIcon} alt='menu icon' />
            </button>
            <ul className='manuLinks' style={{'visibility': (!this.props.mobile || this.props.burgerMemu) ? 'visible' :'hidden', 'animation': (!this.props.mobile || this.props.burgerMemu) ? 'memuToggle 0.5s ease-in-out' : 'none'}}>
                <li key='3'><Link to='/profile'>My Profile</Link></li>
                <li key='4'><Link to='/timeline'>Time Line</Link></li>
                <li key='5'><Link to='/newmoment'>New Moment</Link></li>
                <li key='6'><Link to='/' onClick={(e)=>this.logout(e)}>Log Out</Link></li>
            </ul>
        </nav>
      )
    }
    else {
      return (
        <nav role='navigation'>
            <Link to='/' className='homeLink'>{<FontAwesomeIcon icon={faChild} size='2x'/>}Story Line</Link>
            <button onClick={this.burgetMemuToggle} className="burger_memu" href="" style={{'visibility': this.props.mobile ? 'visible' :'hidden', 'transform': this.props.burgerMemu? 'rotate(90deg)' : 'none'}}>
              <img src={menuIcon} alt='menu icon' />
            </button>
            <ul className='manuLinks' style={{'visibility': (!this.props.mobile || this.props.burgerMemu) ? 'visible' :'hidden', 'animation': (!this.props.mobile || this.props.burgerMemu) ? 'memuToggle 0.5s ease-in-out' : 'none'}}>
                <li key='1'><Link to='/login'>Log In</Link></li>
                <li key='2'><Link to='/register'>Create Account</Link></li>
            </ul>
        </nav>
      )
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  mobile: state.mobile,
  burgerMemu: state.burgerMemu
})

export default withRouter(connect(mapStateToProps)(nav))
