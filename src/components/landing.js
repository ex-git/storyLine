import React, { Component } from 'react'

import {connect} from 'react-redux'
import {fetchPhotos} from '../actions'

import Loading from './loading'

import './landing.scss'

export class landing extends Component {
  componentWillMount() {
    this.props.photos.length <12 && this.props.dispatch(fetchPhotos());
  }
  render() {
    if(this.props.photos.length <15) {
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
              <h2>EVERY PHOTO HAS ITS OWN STORY!</h2>
              <hr className='hr_line'></hr>
              <p>
                <span className='quote'>"The best thing about a picture is that it never changes, even when the people in it do"</span>
                <br></br>
                <span className='quote_by'>-Andy Warhol</span>
              </p>
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