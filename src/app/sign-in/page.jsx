"use client"
import React from 'react'
import "../../css/sign-in.css"
import Link from "next/link"
import { useUserStore } from '../../store/store';
function page() {

    const username = useUserStore(state => state.username)
  return (
    <div className="wrapper" >
        <span className="icon-close">
            <ion-icon name="close">
                
            </ion-icon>
        </span>
        
        
        <div className="form-box login">
        
            <h2>Login</h2>
            <h2>{username}</h2>
        <form action="#">
            <div className="input-box">
                <span className="icon"><ion-icon name="mail-open"></ion-icon></span>
                <input type="email" required/>
                <label >Email</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" required/>
                <label >Password</label>
            </div>

            <div className="remember-forget">
                <label ><input type="checkbox"/>Remember Me</label>
                <a href="#">Forget Password?</a>
            </div>
            <button type="submit"className="btn">Login</button>
            <div className="login-register">
                <p>Don't have an Account? <Link href="/sign-up" className="login link">Register</Link> </p>
            </div>
        </form>
        </div>



     
    </div>
  )
}

export default page