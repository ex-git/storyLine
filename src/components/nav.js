import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'

export default function nav() {
  return (
    <nav role='navigation'>
        <Link to='/' className='homeLink'>Home</Link>
        <ul className='manuLinks'>
            <li key='1'><Link to='/login'>Log In</Link></li>
            <li key='2'><Link to='/timeline'>Time Line</Link></li>
            <li key='3'><Link to='/newmoment'>New Moment</Link></li>
        </ul>
    </nav>
  )
}
