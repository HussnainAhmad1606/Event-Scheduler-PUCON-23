"use client"
import React, { useEffect, useState } from 'react'
import Card from "../../components/Card";
import { useUserStore } from '../../store/store';
import {useRouter} from "next/navigation"

function page() {

  const [username, setUsername] = useState("")
  const [events, updateEvents] = useState([])

  const router = useRouter();
  useEffect(()=> {
    var user = localStorage.getItem("username");
    if (user != "") {
      setUsername(user);
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
    <button onClick={() => {
      router.push("/feed/add-event")
    }} className="btn btn-active btn-primary">Add New Event</button>
  <h1>Hi, {username}</h1>

    <div className='grid gap-10 ml-7 grid-cols-3 '>
  {
    events.map((event) => {
      return    <Card title={event.name} link={event.slug} description={event.description}/>
    })
  }
    
    
    
    </div>
    </>
  )
}

export default page