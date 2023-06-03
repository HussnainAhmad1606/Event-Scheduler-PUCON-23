"use client"
import React, { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function page({params}) {

    const [eventId, setEventId] = useState("");
    const [eventTitle, setEventTitle] = useState("");
    const [eventSlug, setEventSlug] = useState("");
    const [eventDesc, setEventDesc] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventDuration, setEventDuration] = useState("");
    const [eventPoster, setEventPoster] = useState("");
    const [eventType, setEventType] = useState("Single");
    const [eventLimit, setEventLimit] = useState(0);


    const {EventSlug} = params;
    

    const [username, setUsername] = useState("");
    


    useEffect(() => {
        const user = localStorage.getItem("username");
        if (user != "") {
            setUsername(user);
        }
        const data = {
            slug: EventSlug
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
            setEventId(data.event[0]._id)
            setEventTitle(data.event[0].name);
            setEventDesc(data.event[0].description);
            setEventSlug(data.event[0].slug);
            setEventPoster(data.event[0].poster);
            setEventDate(data.event[0].date);
            setEventTime(data.event[0].time);
            setEventDuration(data.event[0].duration);
            setEventLimit(data.event[0].limit);
            setEventType(data.event[0].type);
        }
           
            )
    
      
    }, [])


    const handleChange = (e) => {
        if (e.target.name == "name") {
            setEventTitle(e.target.value);
        }
        else if (e.target.name == "desc") {
            setEventDesc(e.target.value);
        }
        else if (e.target.name == "slug") {
            setEventSlug(e.target.value);
        }
       else  if (e.target.name == "date") {
            setEventDate(e.target.value);
        }
        else if (e.target.name == "time") {
            setEventTime(e.target.value);
        }
        else if (e.target.name == "duration") {
            setEventDuration(e.target.value);
        }
        else if (e.target.name == "poster") {
            setEventPoster(e.target.value);
        }
        else if (e.target.name == "type") {
            setEventType(e.target.value);
        }
        else if (e.target.name == "limit") {
            setEventLimit(e.target.value);
        }
    }


    const updateEvent = () => {
            const data = {
                _id: eventId,
                name: eventTitle,
                slug: eventSlug,
                description: eventDesc,
                date: eventDate,
                time: eventTime,
                duration: eventDuration,
                poster: eventPoster,
                type: eventType,
                limit: eventLimit,
                author: username
            }
            fetch(`${process.env.NEXT_PUBLIC_URL}/api/events/update-event`, {
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
        <div>
            <h1>Hi, {username}</h1>
            <h1>Edit an Event</h1>

<div className='w-[100%] h-[100vh] flex justify-around items-center flex-col' id="form">
    
<input name='name' value={eventTitle} onChange={handleChange} type="text" placeholder="Event Name" className="input input-bordered input-primary w-full max-w-xs" />
<input name='slug' value={eventSlug} onChange={handleChange} type="text" placeholder="Event Slug" className="input input-bordered input-primary w-full max-w-xs" />
            
            <textarea name='desc' value={eventDesc} onChange={handleChange}  cols={40} className="textarea textarea-primary" placeholder="Event Description"></textarea>
            <input name='date' value={eventDate} onChange={handleChange}  type="date" placeholder="Event Date" className="input input-bordered input-primary w-full max-w-xs" />
            <input name='time' value={eventTime} onChange={handleChange}  type="time" placeholder="Event Time" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='poster' value={eventPoster} onChange={handleChange}  placeholder="Event Poster URL" className="input input-bordered input-primary w-full max-w-xs" />
            <input name='duration' value={eventDuration} onChange={handleChange}  type="text" placeholder="Event Duration" className="input input-bordered input-primary w-full max-w-xs" />
            <input name='limit' value={eventLimit} onChange={handleChange}  type="number" placeholder="Members Limit" className="input input-bordered input-primary w-full max-w-xs" />

            <select value={eventType} onChange={handleChange} name='type' className="select select-primary w-full max-w-xs">
  <option value="not selected" disabled selected>Event Type:</option>
  <option value={"Single"}>Single</option>
  <option value="Daily">Daily</option>
  <option value="Weekly">Weekly</option>
  <option value="Monthly">Monthy</option>
  <option value="Yearly">Yearly</option>
</select>

<button onClick={updateEvent} className="btn btn-primary">Update Event</button>
</div>
        </div>
</>
    )
}

export default page