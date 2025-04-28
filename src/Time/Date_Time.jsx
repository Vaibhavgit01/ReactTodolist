import React, { useState } from 'react'

const Date_Time = () => {
  const [date,setDate]=useState("")
  const [time,setTime]=useState("")

  setInterval(() => {
   const  now = new Date()
   const date = now.toLocaleDateString()
   setDate(`${date}`)
  }, 1000);
  setInterval(() => {
   const  now = new Date()
   const time = now.toLocaleTimeString()
   setTime(`${time}`)
  }, 1000);



  return (
    <>
    <div className="flex justify-center items-center mt-5">
      <h1 className='bg-black text-4xl text-white p-3 rounded-xl'>
      {date}
      </h1>
        </div>
      <div className='flex justify-center items-center mt-5'>
      <h1 className='bg-black text-4xl text-white p-3 rounded-xl'>
        {time}
      </h1>
      </div>
    
    </>
  )
}

export default Date_Time