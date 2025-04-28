import React, { useState } from 'react'
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Todoform from './Components/Todoform';
import TodoList from './Components/TodoList';


const Todo = () => {
    const [task, setTask] = useState([])
    const [dateTime, SetDataTime] = useState("")


    
    const handleSubmit = (inputValue) => {
    const {id , content , checked} = inputValue
        if (!content) return
        // if (task.includes(inputValue)) {
        //     // SetInputValue("")
        //     // alert("Task already exists")
        //     return
        // }
        const ifTodoContentMatched = task.find((curtask) => curtask.content === content)
        if (ifTodoContentMatched) {
            
            return
        }


        setTask((prev) => [...prev, {id, content, checked}])
        // SetInputValue("")
        console.log(task)
    }

    ////Date & Time value


    setInterval(() => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        SetDataTime(`${date}-${time}`)
    }, 1000);

    ///Delete function
    const handleDeleteList = (value) => {
        // console.log(task); 
        // console.log(value);
        const updateValue = task.filter((curtask) => { return curtask.content !== value })
        setTask(updateValue)
    }
    const handleCheckList = (value) => {
        console.log("click ho rha hai");
        const updateValue = task.map((curtask) => {
            if (curtask.content === value) {
                return { ...curtask, checked: !curtask.checked }
            }else{
            return curtask
            }
        })
        setTask(updateValue)
    }
    const handleClearAll = () => {
        setTask([])

    }


    return (
        <div>
            <header className='flex justify-center items-center h-20 md:flex md:justify-center md:items-center md:pt-38'>
                <h1 className='bg-black text-4xl text-white p-3 rounded-xl'>Todo List</h1>
            </header>
            <h1 className='flex justify-center items-center text-2xl text-white font-semibold mb-5 md:mt-10'>{dateTime}</h1>
            <Todoform onAddInput = {handleSubmit}/>
            <div className="flex flex-col justify-center items-center mt-5">
                <ul className="">
                    {
                        task.map((curtask, index) => {
                            return (
                                <TodoList key={curtask.id} data={curtask.content}
                                checked={curtask.checked} onHandleDeleteList={handleDeleteList}
                                onHandleCheckList={handleCheckList}/>
                            )
                        })
                    }
                </ul>
                <div className="button flex justify-center  items-center">
                    <button className=' bg-purple-700 text-white p-2 text-2xl font-semibold font-serif rounded-4xl mt-4 cursor-pointer hover:bg-purple-500 hover:scale-104 active:scale-95 transform transition-all duration-500 active:bg-purple-100' onClick={handleClearAll}>
                        Clear All </button> </div>
            </div>

        </div>
    )
}

export default Todo