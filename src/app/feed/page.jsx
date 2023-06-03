"use client"
import React, { useEffect, useState } from 'react'
import Card from "../../components/Card";
import { useUserStore } from '../../store/store';
import Filter from '../../components/Filter';
import Navbar from'../../components/Navbar';
function page() {

  const [username, setUsername] = useState("")
  const [events, updateEvents] = useState([])

  useEffect(() => {
    var user = localStorage.getItem("username");
    if (user != "") {
      setUsername(user)
    }


    fetch(`${process.env.NEXT_PUBLIC_URL}/api/events/show-events`)
      .then(res => res.json())
      .then(data => {
        updateEvents(data.events);
      })
  })

  const usernameFromStore = useUserStore(state => state.username)
  return (

    <>


<Navbar/>

      <h1>Hi, {username}</h1>
      <div className='flex ml-20 mb-5 items-center justify-center' >

        <Filter />
        <input type="text" placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs ml-2" />

        <div className="card-actions ml-2 justify-end">
          <button className="btn btn-primary">Search</button>
        </div>

      </div>

    </>
  )
}

export default page