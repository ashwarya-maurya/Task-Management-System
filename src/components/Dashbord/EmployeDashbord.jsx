import React from 'react'
import Header from './resources/Header'
import TaskCount from './resources/TaskCount'
import TaskList from '../Tasklist/TaskList'

const EmployeDashbord = (props) => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen w-screen'>
            <Header changeuser={props.changeuser} data = {props.data}/>
            <TaskCount data = {props.data}/>
            <TaskList data = {props.data}/>
        </div>
    </div>
  )
}

export default EmployeDashbord