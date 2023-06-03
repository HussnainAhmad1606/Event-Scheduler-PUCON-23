"use client"
import React, { useState } from 'react'
import "../../css/sign-in.css"
import Link from "next/link"
import { useUserStore } from '../../store/store';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function page() {

    const usernameFromStore = useUserStore(state => state.username)

    const updateUsername = useUserStore(state => state.setUsername)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = () => {
        const data = {
            username: username,
            password: password
        }
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)

         if (data.type=="success") {
            toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

                updateUsername(username)
         }
         else {
            toast.error(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
         }
             
        })


    }

    const handleChange = (e) => {
        if (e.target.name == "username") {
            setUsername(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }
        }
  return (
    <>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className="wrapper" >
        <span className="icon-close">
            <ion-icon name="close">
                
            </ion-icon>
        </span>
        
        
        <div className="form-box login">
            <h2>Login</h2>
            <div className="input-box">
                <span className="icon"><ion-icon name="mail-open"></ion-icon></span>
                <input type="text" value={username} name='username' onChange={handleChange} required/>
                <label >Username</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" required value={password} name='password' onChange={handleChange}/>
                <label >Password</label>
            </div>

            <div className="remember-forget">
                <a href="#">Forget Password?</a>
            </div>
            <button onClick={userLogin} type="submit"className="btn">Login</button>
            <div className="login-register">
                <p>Don't have an Account? <Link href="/sign-up" className="login link">Register</Link> </p>
            </div>
       
 
        </div>



     
    </div>
</>
  )
}

export default page