import React, { Component } from 'react'
import happy1 from './temp/happy1.jpg'
import happy2 from './temp/happy2.jpg'
import happy3 from './temp/happy3.jpg'
import happy4 from './temp/happy4.jpg'
import happy5 from './temp/happy5.jpg'
import happy6 from './temp/happy6.jpg'
import happy7 from './temp/happy7.jpg'
import happy8 from './temp/happy8.jpg'
import happy9 from './temp/happy9.jpg'

import './timeline.scss'

export default class timeline extends Component {
  render() {
    return (
      <section className='timeline'>
        <ul>
            <li key='1'>
                <div className='image'>
                    <img src={happy1} alt='happy1'  />
                </div>
                <div className='moment'>
                    <span className='text'>The special Moment</span>    
                    <span className='date'>02/18/2019</span>
                </div>
            </li>
            <li key='2'>
                <div className='image'>
                    <img src={happy2} alt='happy2'  />
                </div>
                <div className='moment'>
                    <span className='text'>The special Moment</span>    
                    <span className='date'>02/18/2019</span>
                </div>
            </li>
            <li key='3'>
                <div className='image'>
                    <img src={happy3} alt='happy3'  />
                    <img src={happy4} alt='happy4' width='200' />
                    <img src={happy5} alt='happy6' width='200' />
                    <img src={happy6} alt='happy6' width='200' />
                    <img src={happy7} alt='happy6' width='200' />
                </div>
                <div className='moment'>
                    <span className='text'>The special Moment</span>    
                    <span className='date'>02/18/2019</span>
                </div>
            </li>
        </ul>
      </section>
    )
  }
}
