"use client"
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import EventDetail from "../../../components/EventDetail";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Card from '@/components/Card';
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
            username: user
        }

        fetch(`${process.env.NEXT_PUBLIC_URL}/api/events/get-wishlist`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setEvents(data.events)
        })
           
        
    
      
    }, [])
    


    return (
<>
<Navbar/>
        <div>
           
        {
            events.map((event)=> {
                return <Card link={event.slug} poster={event.poster} title={event.name} id={event._id} description={event.description}/>
            })
        }
        </div>
        </>
    )
}

export default page