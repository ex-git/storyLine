import React, { Component } from 'react'
import Notifications, {notify} from 'react-notify-toast';
import 'date-input-polyfill-react'
import './newMoment.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export default class newMoment extends Component {

  state = {
    uploadBoxText: 'Choose files...'
  }
  //use create notification queue using notify
  toast = notify.createShowQueue()


  handleUpload(e) {
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
      messages.forEach(msg=>this.toast(msg, 'error', 2000))
      this.files.value = ''
      this.setState({
        uploadBoxText: 'Choose files...'
      })
    }
  }

  handleType(e) {
    console.log(this.story.value)
  }

  handleSubmit(e) {
      e.preventDefault();
      this.files.value = ''
      this.story.value = ''
      this.setState({
        uploadBoxText: 'Choose files...'
      })
  }

  render() {
    let uploadIcon = <FontAwesomeIcon icon={faCloudUploadAlt} size='3x'/>
    return (
      <section className='newMoment'>
        <Notifications />
        <form onSubmit={e=>this.handleSubmit(e)} className='new'>
            <legend>Record New Moment</legend>
            <label htmlFor="when">Date:</label>
            <input id="when" name="when" type="date" placeholder='mm/dd/yyyy' date-format="mm/dd/yyyy"></input>
            <input
              accept="image/*"
              type='file'
              multiple
              name='momentFiles'
              id='momentFile'
              ref={input=> this.files = input}
              onChange={e=>this.handleUpload(e)}
            ></input>
            <label htmlFor='momentFile'>
              {uploadIcon}
              {this.state.uploadBoxText}
            </label>
            <label htmlFor='shortStory' >-Short Story-</label>
            <textarea id='shortStory' ref={input=> this.story = input} onChange={e=>this.handleType(e)}></textarea>
            <button type='submit'>Submit</button>
        </form>
      </section>
    )
  }
}
