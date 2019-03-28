import React, { Component } from 'react'
import './userForm.scss'

//toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default class register extends Component {

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
            toast.success('Success! But this is just a demo. So your info will not be sent to remot server. Login with anything you want for testing.', {
                className: 'toastMsg',
                //add id to remove duplicate message
                toastId: 0
            })
            setTimeout(()=>{
                this.props.history.push('/login')
            }, 9000)
            
        }
    }


  render() {
    return (
      <section className='register' onSubmit={e=>this.handleSubmit(e)}>
        <ToastContainer 
            position="top-center"
            autoClose={8000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />
        <form className='registerForm'>
            <legend>Create New Account</legend>
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
