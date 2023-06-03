"use client"
import React, { useState, useEffect } from 'react'
import EventDetail from "../../../components/EventDetail";
function page({params}) {

    const {eventSlug} = params;

    const [event, setEvent] = useState("");
    const [username, setUsername] = useState("");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("username");
        if (user != "") {
            setUsername(user);
        }

            const data = {
                slug: eventSlug
            }
            fetch(`${process.env.NEXT_PUBLIC_URL}/api/events/single-event`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data=>{
                console.log(data)
    
            setEvent(data.event);
            setIsReady(true);
                 
            })
    
    
      
    }, [])
    


    return (
        <div>
            <h1>Hi, {username}</h1>
            <div className='flex flex-col  md:flex-row '>
                <div className=' flex flex-col justify-center items-center w-3/6 '>

                    <h1 className='text-center text-7xl font-sans py-5' >{isReady && event[0].name}</h1>
                    <p className='text-justify  px-8' >{isReady && event[0].description}</p>
                    <button className="btn btn-primary mt-10  text-center">Join Event</button>



                </div>
                <div className='w-3/6 m-5 '>
                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event Picture" />
                </div>



            </div>
            <div className='grid gap-10 m-10 grid-cols-3 '>
                <EventDetail title="Time" data={isReady && event[0].time} />
                <EventDetail title="Date" data={isReady && event[0].date} />
                <EventDetail title="Limit" data={isReady && event[0].limit} />

            </div>
        </div>
    )
}

export default page