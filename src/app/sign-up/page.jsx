import React from 'react'
import "../../css/sign-in.css"
import Link from 'next/link'

function page() {
  return (

    <div className="wrapper" >
        <span className="icon-close">
            <ion-icon name="close">
                
            </ion-icon>
        </span>
        
        
        <div className="form-box login">
        
            <h2>Registeration</h2>
        <form action="#">
            <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" required/>
                <label >Username</label>
            </div>
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
                <label ><input type="checkbox"/>Agree to term & conditions</label>
                
            </div>
            <button type="submit"className="btn">Register</button>
            <div className="login-register">
                <p>Already have an Account? <Link href="/sign-in" className="login link">Login</Link> </p>
            </div>
           
        </form>
        </div>



     
    </div>
   
  )
}

export default page