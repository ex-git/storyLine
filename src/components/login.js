import React, { Component } from 'react'
import './userForm.scss'

//toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import {handleLogin} from '../actions'

import {connect} from 'react-redux'

export class login extends Component {

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
            toast.success('Scuess. But this is just a demo :) So nothing can be changed~', {
                className: 'toastMsg',
                //add id to remove duplicate message
                toastId: 0
            })
            setTimeout(()=>{
                let userInfo = {
                    name: this.username.value
                    // password: this.password.value
                }
                this.props.dispatch(handleLogin(userInfo))
                this.props.history.push('/timeline')
            }, 2000)
            
        }
    }


  render() {
    return (
      <section className='login' onSubmit={e=>this.handleSubmit(e)} >
        <form className='loginForm'>
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
            <button type='submit'>Sign In</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(login)