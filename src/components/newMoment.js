import React, { Component } from 'react'
import Notifications, {notify} from 'react-notify-toast';
import 'date-input-polyfill-react'
import './newMoment.scss'

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
    let uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="40" height='30' focusable="false" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"/></svg>
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
