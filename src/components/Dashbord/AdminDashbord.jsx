import React from 'react'
import Header from './resources/Header'
import CreateTask from './resources/CreateTask'
import AllTask from './resources/AllTask'

const AdminDashbord = (props) => {
  return (
    <div>
      <div className='p-8 bg-[#1c1c1c] h-screen w-screen'>
            <Header changeuser = {props.changeuser} data={props.data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    </div>
  )
}

export default AdminDashbord