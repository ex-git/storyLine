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

import './landing.scss'

export default class landing extends Component {
  render() {
    return (
      <section className='landing'>
        <div className='photosWall'>
            <img src={happy1} alt='happy1' width='400' />
            <img src={happy2} alt='happy2' width='400' />
            <img src={happy4} alt='happy3' width='400' />
            <img src={happy5} alt='happy2' width='400' />
            <img src={happy3} alt='happy1' width='400' />
            <img src={happy6} alt='happy3' width='400' />
            <img src={happy7} alt='happy2' width='400' />
            <img src={happy8} alt='happy1' width='400' />
            <img src={happy9} alt='happy3' width='400' />
            <img src={happy2} alt='happy2' width='400' />
            <img src={happy3} alt='happy2' width='400' />
            <img src={happy5} alt='happy1' width='400' />
            <img src={happy7} alt='happy2' width='400' />
            <img src={happy1} alt='happy2' width='400' />
            <img src={happy9} alt='happy3' width='400' />
            <img src={happy2} alt='happy2' width='400' />
            <img src={happy4} alt='happy1' width='400' />
            <img src={happy6} alt='happy1' width='400' />
        </div>
        <div className='intro'>
            <h2>Your personal timeline start here</h2>
        </div>
      </section>
    )
  }
}
