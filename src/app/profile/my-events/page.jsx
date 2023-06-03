"use client"
import React, { useState, useEffect } from 'react'
import EventDetail from "../../../components/EventDetail";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Card from '@/components/UserCard';
function page({params}) {

    const {eventSlug} = params;

    const [events, setEvents] = useState([]);
    const [username, setUsername] = useState("");
  


    useEffect(() => {

        const user = localStorage.getItem("username");
        if (user != "") {
            setUsername(user);
        }

        const data = {
            author: user
        }

        fetch(`${process.env.NEXT_PUBLIC_URL}/api/events/event-by-username`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            setEvents(data.events)
        })
           
        
    
      
    }, [])
    


    return (
        <div>
           
        {
            events.map((event)=> {
                return <Card slug={event.slug} poster={event.poster} title={event.name} id={event._id} description={event.description}/>
            })
        }
        </div>
    )
}

export default page