import React from 'react';
import Sidebar from "./Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Task from "./components/Task";
import Setting from "./components/Setting";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  
  

  return (

    <>
    <BrowserRouter>
    <div className='flex'>

      <Sidebar />

      <main>
        <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='/setting' element = {<Setting/>}  />
       <Route path='/task' element = {<Task/>}  />
       <Route path='/dashboard' element = {<Dashboard/>}  />
       </Routes>
      </main>

    </div>

    </BrowserRouter>
    </>
  )
}

export default App