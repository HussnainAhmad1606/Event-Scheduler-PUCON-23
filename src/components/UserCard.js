import React from 'react'

import {useRouter} from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Card({title, description, link, id, poster, slug}) {
const router = useRouter();

const deleteEvent = () => {
  const data = {
    _id: id
  }
  fetch(`${process.env.NEXT_PUBLIC_URL}/api/events/delete-event`, {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
})
.then(response => response.json())
.then(data=>{
    console.log(data);
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
        router.push(`/profile/my-events/${slug}`)
      }} className="btn btn-primary">Edit</button>
      <button onClick={deleteEvent} className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
      </>
)
}

export default Card