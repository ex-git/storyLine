import React, { Component } from 'react'
import './userForm.scss'

//toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default class profile extends Component {

    //use create notification queue using notify
    // toast = notify.createShowQueue()
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
            messages.forEach((msg,idx)=>toast.error(msg, {
                className: 'toastMsg',
                //add delay give accessibility reader enough time to read new pop up
                delay: idx*1500,
                //add id to remove duplicate message
                toastId: idx
            }))
        }
        else {
            toast.success('Scuess. But this is just a demo :) So nothing will change~', {
                className: 'toastMsg',
                //add id to remove duplicate message
                toastId: 0
            })
        }
    }


  render() {
    return (
      <section className='profile' onSubmit={e=>this.handleSubmit(e)}>
        <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />
        <form className='profileForm'>
            <legend>My Profile</legend>
            <label htmlFor='username'>User Name</label>
            <input id='username'
                type='text'
                ref={input => this.username = input}
                defaultValue={document.cookie.match(/^user/) ? document.cookie.match(/^user/).input.split('=').slice(-1)[0] : ''}
            ></input>
            <br></br>
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                ref={input => this.password = input}
            ></input>
            <button type='submit'>Update</button>
        </form>
      </section>
    )
  }
}
