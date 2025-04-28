import React from 'react'
import { IoIosCheckboxOutline } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'

const TodoList = ({ data, checked, onHandleDeleteList , onHandleCheckList}) => {
    return (
        <li
             className='flex justify-between items-center w-70 h-12 bg-white text-black px-2.5 text-2xl rounded-lg mb-2'>
            <span className={`text-lg font-medium text-black ${checked ? "line-through text-red-600" : ""}`}>{data}</span>
            <div className='flex justify-center items-center gap-4'>
                <button className=' bg-green-500 text-white text-3xl px-1.5 py-0.5 cursor-pointer rounded-lg hover:scale-105' onClick={()=>onHandleCheckList(data)} ><IoIosCheckboxOutline /></button>
                <button className='bg-red-500 text-white text-3xl px-1.5 py-0.5 cursor-pointer rounded-lg hover:scale-105' onClick={() =>
                    onHandleDeleteList(data)}><MdDeleteOutline /></button>
            </div>
        </li>
    )
}

export default TodoList