import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Date_Time from './Time/Date_Time'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-screen md:bg-blue-600'>
     <Todo/>
     {/* <Date_Time/> */}
     {/* <Timer/> */}

    </div>
    </>
  )
}

export default App
