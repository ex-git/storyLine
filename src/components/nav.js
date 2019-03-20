import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

export default function nav() {
  return (
    <nav role='navigation'>
        <Link to='/' className='homeLink'>{<FontAwesomeIcon icon={faChild} size='2x'/>}Home</Link>
        <ul className='manuLinks'>
            <li key='1'><Link to='/login'>Log In</Link></li>
            <li key='2'><Link to='/timeline'>Time Line</Link></li>
            <li key='3'><Link to='/newmoment'>New Moment</Link></li>
        </ul>
    </nav>
  )
}
