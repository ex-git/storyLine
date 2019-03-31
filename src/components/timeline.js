import React, { Component } from 'react'
import happy1 from './temp/happy1.jpg'
import happy2 from './temp/happy2.jpg'
import happy3 from './temp/happy3.jpg'
import happy4 from './temp/happy4.jpg'
import happy5 from './temp/happy5.jpg'
import happy6 from './temp/happy6.jpg'
import happy7 from './temp/happy7.jpg'
import happy8 from './temp/happy8.jpg'

import './timeline.scss'

export default class timeline extends Component {
  render() {
    return (
      <section className='timeline'>
        <ul>
            <li key='1'>
                <div className='image'>
                        <a href={happy3}><img src={happy3} alt='happy3' /></a>
                        <a href={happy4}><img src={happy4} alt='happy4' /></a>
                </div>
                <div className='moment'>
                    <span className='text'>The special Moment</span>    
                    <span className='date'>02/18/2019</span>
                </div>
            </li>
            <li key='2'>
                <div className='image'>
                        <a href={happy1}><img src={happy1} alt='happy1' /></a>
                        <a href={happy2}><img src={happy2} alt='happy2' /></a>
                        <a href={happy5}><img src={happy5} alt='happy5' /></a>
                        <a href={happy7}><img src={happy7} alt='happy7' /></a>
                </div>
                <div className='moment'>
                    <span className='text'>The special Moment</span>    
                    <span className='date'>02/18/2019</span>
                </div>
            </li>
            <li key='3'>
                <div className='image'>
                    <img src={happy3} alt='happy3'  />
                        <a href={happy4}><img src={happy4} alt='happy1' /></a>
                        <a href={happy5}><img src={happy5} alt='happy2' /></a>
                        <a href={happy6}><img src={happy6} alt='happy5' /></a>
                        <a href={happy8}><img src={happy8} alt='happy8' /></a>
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
