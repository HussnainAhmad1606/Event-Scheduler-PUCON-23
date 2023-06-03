import React from 'react'
import EventDetail from "../../../components/EventDetail"
function page() {
    return (
        <>
            <div className='flex flex-col  md:flex-row'>
                <div className=' flex flex-col justify-center items-center w-3/6 '>

                    <h1 className='text-center text-7xl font-sans' >PUCON'23</h1>
<div><p className='text-justify  px-8' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos earum tenetur sequi dolorum, aperiam reprehenderit quidem facilis sint similique autem repellendus consequuntur, vitae culpa modi sapiente deleniti cumque, labore itaque amet doloribus optio eum distinctio saepe. Ratione, impedit animi! Eum non eveniet cum voluptatem nam nesciunt sunt perferendis architecto rem?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos earum tenetur sequi dolorum, aperiam reprehenderit quidem facilis sint similique autem repellendus consequuntur, vitae culpa modi sapiente deleniti cumque, labore itaque amet doloribus optio eum distinctio saepe. Ratione, impedit animi! Eum non eveniet cum voluptatem nam nesciunt sunt perferendis architecto rem?</p>
                        <button className="btn btn-primary  text-center">Button</button>

                        </div>
                    
                </div>
                <div className='w-3/6 mr-5 '>
                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event Picture" />
                </div>



            </div>
            <div className='grid gap-10 ml-7 grid-cols-3 '>
                {/* <EventDetail title="Time" data="12 Hours"/>
<EventDetail title="" data="12 Hours"/> */}

            </div>
        </>
    )
}

export default page