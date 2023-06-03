import React from 'react'
import {BiTimeFive} from "react-icons/bi"
import {BsCalendarDate} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"


function Card({title, data}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
 <div className='flex justify-center items-center '>
 {
    title=="Time"?<BiTimeFive style={{
        width: "100px",
        height: "100px"
    }}/>:""
  }
  {
    title=="Date"?<BsCalendarDate style={{
        width: "100px",
        height: "100px"
    }}/>:""

  }
  {
    title=="Limit"?<AiOutlineUser style={{
        width: "100px",
        height: "100px"
    }}/>:""

  }
 </div>
  <div className="card-body flex justify-center">
    <h2 className="card-title text-4xl ">{title}</h2>
    <p className='text-center text-2xl '>{data}</p>
    
  </div>
</div>
  )
}

export default Card