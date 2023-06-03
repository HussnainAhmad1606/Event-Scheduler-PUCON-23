"use client"
import React, { useEffect, useState } from 'react'
import Card from "../../../../../components/Card";
import { useUserStore } from '../../../../../store/store';
import Filter from '../../../../../components/Filter';
import Navbar from'../../../../../components/Navbar';
import {useRouter} from "next/navigation"

function page({params}) {

  const [username, setUsername] = useState("")
  const [events, updateEvents] = useState([]);

const {SearchQuery, searchType} = params;

  const router = useRouter();
  

  useEffect(()=> {
    var user = localStorage.getItem("username");
    if (user != "") {
      setUsername(user);
    }

    const data = 
      {option: searchType,
        searchValue: SearchQuery}
    

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/filter`, {
      method:"POST",
      headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    updateEvents(data.events)
  })

    
  }, [])

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
  
  return (

    <>
<Navbar/>
<div className='grid gap-10 ml-7 grid-cols-3 '>
      
      {
        events.map((event) => {
          return    <Card key={event._id} title={event.name} link={event.slug} description={event.description}/>
        })
      }
        
        
        
        </div>
    </>
  )
}

export default page