import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Navbar() {
const [username, setUsername] = useState("No User");


const logoutAccount = () => {
    localStorage.removeItem("username");
    toast.success("Logout Successfully", {
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

    useEffect(()=> {
        var user = localStorage.getItem("username");
        if (user != "") {
          setUsername(user);
        }
    },[])
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

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul style={{
                        zIndex: 1
                    }} tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Feed</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Event Scheduler</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Feed</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <p className='text-[1.2rem]'>Hi, {username}</p>
                <Link href={"/profile/my-events"} className="mx-5 btn btn-primary">My Events</Link>
                {
                    username=="No User"?(<><Link href={"/sign-in"} className="mx-2 btn btn-primary">Signup</Link><Link href={"/sign-up"} className="btn btn-primary">Signup</Link></>):<button onClick={logoutAccount} className="btn btn-primary">Logout</button>
                }
                
            </div>
        </div>
                </>
    )
}

export default Navbar;