import React from 'react'
import Header from './resources/Header'
import TaskCount from './resources/TaskCount'
import TaskList from '../Tasklist/TaskList'

const EmployeDashbord = (props) => {
  return (
    <div className='min-h-screen bg-[#1c1c1c]'>
        <div className='mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 sm:py-6 lg:px-8'>
            <Header changeuser={props.changeuser} data = {props.data}/>
            <TaskCount data = {props.data}/>
            <TaskList data = {props.data}/>
        </div>
    </div>
  )
}

export default EmployeDashbord
