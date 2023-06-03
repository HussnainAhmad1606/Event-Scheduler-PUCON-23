"use client"
import React, {useState} from 'react'
import "../../css/sign-in.css"
import Link from 'next/link'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function page() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const createAnAccount = () => {
        const data = {
            username: username,
            password: password,
            email: email,
            isBlocked: false,
            isAdmin: false
        }
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/signup`, {
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
        else if (e.target.name == "password") {
            setPassword(e.target.value);
        }
        else  {
            setEmail(e.target.value);
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
        
            <h2>Registeration</h2>
       <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" value={username} name='username' onChange={handleChange} required/>
                <label >Username</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="mail-open"></ion-icon></span>
                <input type="email" value={email} name='email' onChange={handleChange} required/>
                <label >Email</label>
            </div>
            <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" value={password} name='password' onChange={handleChange} required/>
                <label >Password</label>
            </div>

            <div className="remember-forget">
                <label ><input type="checkbox"/>Agree to term & conditions</label>
                
            </div>
            <button onClick={createAnAccount} type="submit"className="btn">Register</button>
            <div className="login-register">
                <p>Already have an Account? <Link href="/sign-in" className="login link">Login</Link> </p>
            </div>
           

        </div>



     
    </div>
</>
   
  )
}

export default page