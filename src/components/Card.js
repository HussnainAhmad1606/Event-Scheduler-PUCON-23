import React from 'react'

import {useRouter} from "next/navigation"
function Card({title, description, link}) {
  const router = useRouter();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80" alt="Event Pic" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   {description}
    <p> 
    </p>
    <div className="card-actions justify-end">
      <button onClick={()=> {
        router.push(`/feed/${link}`)
      }} className="btn btn-primary">Event Details</button>
    </div>
  </div>
</div>
  )
}

export default Card