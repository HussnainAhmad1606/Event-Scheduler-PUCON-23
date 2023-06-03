import React from 'react'

import {useRouter} from "next/navigation"
function Card({title, description, link,poster}) {
const router = useRouter();
return (



<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
      src={poster}
      alt="Event Pic" /></figure>
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