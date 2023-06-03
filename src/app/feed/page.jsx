"use client"
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import Card from "../../components/Card";
import { useUserStore } from '../../store/store';
import Filter from '../../components/Filter';
import Navbar from '../../components/Navbar';
import { useRouter } from "next/navigation"
import Link from "next/link"

function page() {

  const [username, setUsername] = useState("")
  const [events, updateEvents] = useState([]);



  const router = useRouter();
  useEffect(() => {
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

  const usernameFromStore = useUserStore(state => state.username);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("Title");


  const changeFilterHandle = (e) => {
    if (e.target.name == "search") {
      setSearchQuery(e.target.value);
    }
    else if (e.target.name == "type") {
      setSearchBy(e.target.value);
    }


  }
  const filterSearch = () => {
    const data =
    {
      option: searchBy,
      searchValue: searchQuery
    }
    console.log(data)



    fetch(`${process.env.NEXT_PUBLIC_URL}/api/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.events);
        updateEvents(data.events)
      })

  }
  return (
    <>

<Navbar/>
      <div>


        <div id='filterBox' className='flex  items-center justify-center' >

          <select value={searchBy} onChange={changeFilterHandle} name='type' className="select select-primary w-xs max-w-xs">
            <option disabled defaultValue={"Title"}> Filters</option>
            <option value={"Title"}>Title</option>
            <option value={"Description"}>Description</option>
            <option value={"Author"}>Author</option>
          </select>
          <input type="text" name='search' value={searchQuery} onChange={changeFilterHandle} placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs ml-2" />

<div className="card-actions ml-2 justify-end">
  <Link href={`/feed/search//${searchQuery}/${searchBy}`} className="btn btn-primary">Search</Link>
</div><em>




  
</em>
       

        </div>



<center>
<h1 className='my-5 text-2xl'>Events</h1>
<div className='flex justify-center mt-5'>

<button onClick={() => {
  router.push("/feed/add-event")
}} className="btn btn-active btn-primary">Add New Event</button>
</div>
</center>
        <div style={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          justifyContent: "center",
          alignItems: "center"
        }} className='my-5 ml-[30px]'>

          {
            events.map((event) => {
              return <Card poster={event.poster} key={event._id} title={event.name} link={event.slug} description={event.description} />
            })
          }



        </div>
       
      </div >
    </>
  )
}

export default page