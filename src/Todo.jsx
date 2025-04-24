import React, { useState } from 'react'
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
const Todo = () => {
    const [inputValue, SetInputValue] = useState("")
    const [task, setTask] = useState([])
    const handleInputChange = (value) => {
        SetInputValue(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!inputValue) return
        if (task.includes(inputValue)) {
            SetInputValue("")
            // alert("Task already exists")
            return
        }
        setTask((prev) => [...prev, inputValue])
        SetInputValue("")
        console.log(task)
    }

    return (
        <div>
            <header className='flex justify-center items-center h-20 md:flex md:justify-center md:items-center md:pt-38'>
                <h1 className='bg-black text-4xl text-white p-3 rounded-xl'>Todo List</h1>
            </header>
            <main className='flex flex-col justify-center items-center md:flex md:justify-center md:items-center md:pt-15 '>
                <form action="" onSubmit={handleSubmit}>
                    <div className='flex justify-center items-center'>
                        <input type="text" autoComplete='off' className='w-60 h-12 bg-white text-black  px-2 text-xl rounded-l-2xl' value={inputValue} onChange={(e) => {
                            handleInputChange(e.target.value)

                        }} />

                        <button type="submit" className='h-12 bg-[#4693eb] px-4.5 text-2xl text-white font-semibold rounded-r-2xl cursor-pointer hover:bg-[#4e6194] hover:scale-109 active:scale-95 transition-all duration-200 ease-in-out'>Add</button>
                    </div>
                </form>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="">
                        {
                            task.map((curtask, index) => {
                                return (
                                    <div key={index} className='flex justify-between items-center w-70 h-12 bg-white text-black px-2.5 text-2xl rounded-lg mb-2'>
                                        <span className='text-lg font-medium text-black'>{curtask}</span>
                                        <div className='flex justify-center items-center gap-4'>
                                            <button className=' bg-green-500 text-white text-3xl px-1.5 py-0.5 cursor-pointer rounded-lg hover:scale-105' ><IoIosCheckboxOutline /></button>
                                            <button className='bg-red-500 text-white text-3xl px-1.5 py-0.5 cursor-pointer rounded-lg hover:scale-105'><MdDeleteOutline /></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Todo