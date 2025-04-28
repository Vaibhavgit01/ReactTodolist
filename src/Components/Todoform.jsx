import React, { useState } from 'react'


const Todoform = ({onAddInput}) => {
     const [inputValue, SetInputValue] = useState({})

     const handleInputChange = (value) => {
        SetInputValue({id:value, content:value, checked:false})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        onAddInput(inputValue);
        SetInputValue({id:"", content:"", checked:false})
    }
  return (
    <main className='flex flex-col justify-center items-center md:flex md:justify-center md:items-center  '>
                <form action="" onSubmit={handleSubmit}>
                    <div className='flex justify-center items-center'>
                        <input type="text" autoComplete='off' className='w-60 h-12 bg-white text-black  px-2 text-xl rounded-l-2xl' value={inputValue.content} onChange={(e) => {
                            handleInputChange(e.target.value)

                        }} />

                        <button type="submit" className='h-12 bg-[#4693eb] px-4.5 text-2xl text-white font-semibold rounded-r-2xl cursor-pointer hover:bg-[#515f85] hover:scale-109 active:scale-95 active:bg-[#2a4b7f] transition-all duration-200 ease-in-out md:bg-black md:hover:bg-gray-800'>Add</button>
                    </div>
                </form>
            </main>
  )
}

export default Todoform