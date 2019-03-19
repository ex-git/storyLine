import React, { Component } from 'react'
import './login.scss'
import Notifications, {notify} from 'react-notify-toast';

export default class login extends Component {

    //use create notification queue using notify
    toast = notify.createShowQueue()
    handleSubmit(e) {
        e.preventDefault();
        const messages = []
        if(this.username.value.trim()==='') {
            messages.push('User Name is empty')
        }
        else if(this.username.value.trim() !== this.username.value) {
            messages.push('You have space around your user name')
        }
        if(this.password.value.trim()==='') {
            messages.push('Password is empty')
        }
        else if(this.password.value.trim()!==this.password.value) {
            messages.push('You have space around your password')
        }
        if(messages.length) {
            messages.forEach(msg=>this.toast(msg, 'error', 2000))
        }
    }


  render() {
    return (
      <section className='login' onSubmit={e=>this.handleSubmit(e)}>
        <Notifications />
        <form className='loginForm'>
            <legend>Log In</legend>
            <label htmlFor='username'>User Name</label>
            <input id='username'
                type='text'
                ref={input => this.username = input}
            ></input>
            <br></br>
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                ref={input => this.password = input}
            ></input>
            <button type='submit'>Submit</button>
        </form>
      </section>
    )
  }
}
