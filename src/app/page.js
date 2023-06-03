import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link"
import EventDetail from "../components/EventDetail"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex flex-col  md:flex-row '>
    <div className=' flex flex-col justify-center items-center '>

        <h1 className='text-center text-5xl font-sans py-5' >Welcome to Psycho Scheduler</h1>
        <p className='text-justify  px-8' >A place to schedule your event with ease by adding some details of it.</p>
        <div className='flex'>
        <Link href={"/feed"}  className="btn btn-primary mt-10  text-center"><ion-icon name="heart-outline"></ion-icon>Go to Feed</Link>
        </div>



    </div>
    <div className='m-5 '>
        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event Picture" />
    </div>






</div>
<center>
  <h1 className={"my-[30px] text-6xl"} >Statistics</h1>
</center>

<div style={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          justifyContent: "center",
          alignItems: "center"
        }} className='my-5 ml-[30px]'>
                <EventDetail title="12000" data="Daily Visitors" />
                <EventDetail title="200+" data={"Events Scheduled"} />
                <EventDetail title="5,000" data={"Monthly Users"} />

               

            </div>
    </>
  )
}
