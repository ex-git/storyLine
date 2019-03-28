import React, { Component } from 'react'

import {connect} from 'react-redux'
import {fetchPhotos} from '../actions'

import Loading from './loading'

import './landing.scss'

export class landing extends Component {
  componentWillMount() {
    this.props.photos.length <20 && this.props.dispatch(fetchPhotos());
  }
  render() {
    if(this.props.photos.length <20) {
      return <Loading />
    }
    else {
      let photos = this.props.photos.map((photo, idx)=>{
        return <div className='photo'key={idx}><img src={photo} alt={`${idx}`} /></div>
      })
      return (
        <section className='landing'>
          <div className='photosWall'>
            {photos}
          </div>
          <div className='intro'>
              <h2>Your personal timeline start here</h2>
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = state => ({
  photos: state.photos
})

export default connect(mapStateToProps)(landing)