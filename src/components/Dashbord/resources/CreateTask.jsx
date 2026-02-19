import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const CreateTask = () => {
  
  const { userdata, setuserdata } = useContext(AuthContext)

  const [task_title, settask_title] = useState('')
  const [task_date, settask_date] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')
  const [task_description, settask_description] = useState('')


  const submitHandeler = (e)=>{
    e.preventDefault()

    if (!userdata) return

    const newTask = {task_title,task_date,task_description,category,active_task:false,new_task:true,completed_task:false,failed_task:false}

    const updatedEmployees = userdata.employees.map((emp) => {
    if (emp.name === assignTo) {
      return {
        ...emp,
        tasks: [...emp.tasks, newTask],
        task_numbers: {
        ...emp.task_numbers,
        new: emp.task_numbers.new + 1
        }
      }
    }
    return emp
  })

  const updatedData = {
      ...userdata,
      employees: updatedEmployees
    }

  setuserdata(updatedData)

  localStorage.setItem(
      'employees',
      JSON.stringify(updatedEmployees)
    )

    setassignTo('')
    settask_description('')
    setcategory('')
    settask_date('')
    settask_title('')
  }

  return (
    <div className='bg-stone-900 mt-5 p-5 rounded-lg'>
      <form onSubmit={(e)=>{
        submitHandeler(e)
      }}
      className='flex justify-between items-center gap-5'>
        <div className='w-[42%]'>
          <h3>Task Title</h3>
          <input required value={task_title}
          onChange={(e)=>{
            settask_title(e.target.value)
          }}
          className='border-2 border-stone-400 rounded-sm px-2 py-1 text-sm mt-1 mb-4 w-full text-white outline-0' type="text" placeholder='Name of Project' />
          <h3>Date</h3>
          <input required value={task_date}
          onChange={(e)=>{
            settask_date(e.target.value)
          }}
          className='border-2 border-stone-400 rounded-sm px-2 py-1 text-sm mt-1 mb-4 w-full text-white outline-0' type="date" />
          <h3>Assign To</h3>
          <input required value={assignTo}
          onChange={(e)=>{
            setassignTo(e.target.value)
          }}
          className='border-2 border-stone-400 rounded-sm px-2 py-1 text-sm mt-1 mb-4 w-full text-white outline-0' type="text" placeholder='employee name' />
          <h3>Category</h3>
          <input required value={category}
          onChange={(e)=>{
            setcategory(e.target.value)
          }}
          className='border-2 border-stone-400 rounded-sm px-2 py-1 text-sm mt-1 mb-2.5 w-full text-white outline-0' type="text" placeholder='design, dev, testing, etc...' />
        </div>
        <div className='w-[42%] flex justify-center flex-col'>
          <h3>Description</h3>
          <textarea required value={task_description}
          onChange={(e)=>{
            settask_description(e.target.value)
          }}
          className='border-2 border-stone-400 rounded-sm px-2 py-1 text-sm mt-1 mb-2 w-full text-white outline-0' rows='11' id="text"></textarea>
          <button className='bg-green-500 rounded-sm p-1 hover:bg-green-600'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask