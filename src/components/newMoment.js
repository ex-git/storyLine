import React, { Component } from 'react'

import 'date-input-polyfill-react'
import './newMoment.scss'

//toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

// import { submitMoment } from '../actions';

export class newMoment extends Component {
  state = {
    uploadBoxText: 'Choose files...'
  }

  handleUpload = () => {
    this.setState({
      uploadBoxText: this.files.files.length === 1 ? `${this.files.files.length} file selected` : `${this.files.files.length} files selected`
    })
    //messages for toast
    const messages = []
    //only accept png, jpg, and gif file
    const supportedFormats = ['image/png', 'image/jpeg', 'image/gif']

    for(let i=0; i<this.files.files.length; i++) {
      if(this.files.files[i].size/1024/1024 > 5) {
        messages.push(`I'm afraid I can't upload that.
        ${this.files.files[i].name} is too large`)
      }
      if(!supportedFormats.includes(this.files.files[i].type)) {
        messages.push(`I'm afraid I can't upload that.
        ${this.files.files[i].name} is not a supported format`)
      }
    }
    if(messages.length) {
      messages.forEach((msg,idx)=>toast.error(msg, {
          className: 'toastMsg',
          //add delay give accessibility reader enough time to read new pop up
          delay: idx*1500,
          //add id to remove duplicate message
          toastId: idx
      }))
      this.files.value = ''
      this.setState({
        uploadBoxText: 'Choose files...'
      })
    }
  }

  handleSubmit(e) {
      e.preventDefault();
      let messages = []
      if(this.files.value==='') {
          messages.push('You need to select at least one image')
        }
      if (this.story.value.trim()==='') {
        messages.push('Did you forget to write something for this moment?')
      }
      if (this.date.value==='') {
        messages.push('You need to select a valid date for this moment')
      }
      if(messages.length) {
          messages.forEach((msg, idx)=>{
          toast.error(msg, {
            className: 'toastMsg',
            //add delay give accessibility reader enough time to read new pop up
            delay: idx*2000,
            //add id to remove duplicate message
            toastId: idx
          })
        })
      }
      else {
        const formData = new FormData();
        Array.from(this.files.files).forEach((file, idx) => formData.append('file', file))
        formData.append('date', this.date.value)
        formData.append('story', this.story.value)
        // this.props.dispatch(submitMoment(formData))
        this.files.value = ''
        this.story.value = ''
        this.date.value = ''
        this.setState({
          uploadBoxText: 'Choose files...'
        })
        toast.success('Success, but this is just a demo without connection to remote API.', {
          className: 'toastMsg',
          //add id to remove duplicate message
          toastId: 0
        })
      }
  }

  render() {
    let uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} size='3x'/>
    return (
      <section className='newMoment'>
        <form onSubmit={(e)=>this.handleSubmit(e)} className='new' encType="multipart/form-data">
            <ToastContainer 
              position="top-center"
              autoClose={6000}
              hideProgressBar={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <legend>Record New Moment</legend>
            <label htmlFor="when">Date:</label>
            <input
              id="when"
              name="when"
              type="date"
              placeholder='mm/dd/yyyy'
              date-format="mm/dd/yyyy"
              ref={input=> this.date = input}
            ></input>
            <input
              accept="image/*"
              type='file'
              multiple
              name='momentFiles'
              id='momentFile'
              ref={input=> this.files = input}
              onChange={this.handleUpload}
            ></input>
            <label htmlFor='momentFile'>
              {uploadIcon}
              {this.state.uploadBoxText}
            </label>
            <label htmlFor='shortStory' >-Short Story-</label>
            <textarea id='shortStory' ref={input=> this.story = input}></textarea>
            <button type='submit'>Submit</button>
        </form>
      </section>
    )
  }
}

export default connect()(newMoment)