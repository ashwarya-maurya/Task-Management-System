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
    <div className='mt-5 rounded-lg bg-stone-900 p-4 sm:p-5'>
      <form onSubmit={(e)=>{
        submitHandeler(e)
      }}
      className='grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10'>
        <div className='min-w-0'>
          <h3>Task Title</h3>
          <input required value={task_title}
          onChange={(e)=>{
            settask_title(e.target.value)
          }}
          className='mb-4 mt-1 w-full rounded-sm border-2 border-stone-400 px-3 py-2 text-sm text-white outline-0' type="text" placeholder='Name of Project' />
          <h3>Date</h3>
          <input required value={task_date}
          onChange={(e)=>{
            settask_date(e.target.value)
          }}
          className='mb-4 mt-1 w-full rounded-sm border-2 border-stone-400 px-3 py-2 text-sm text-white outline-0' type="date" />
          <h3>Assign To</h3>
          <input required value={assignTo}
          onChange={(e)=>{
            setassignTo(e.target.value)
          }}
          className='mb-4 mt-1 w-full rounded-sm border-2 border-stone-400 px-3 py-2 text-sm text-white outline-0' type="text" placeholder='employee name' />
          <h3>Category</h3>
          <input required value={category}
          onChange={(e)=>{
            setcategory(e.target.value)
          }}
          className='mb-1 mt-1 w-full rounded-sm border-2 border-stone-400 px-3 py-2 text-sm text-white outline-0' type="text" placeholder='design, dev, testing, etc...' />
        </div>
        <div className='flex min-w-0 flex-col'>
          <h3>Description</h3>
          <textarea required value={task_description}
          onChange={(e)=>{
            settask_description(e.target.value)
          }}
          className='mb-3 mt-1 min-h-40 w-full resize-y rounded-sm border-2 border-stone-400 px-3 py-2 text-sm text-white outline-0 lg:min-h-0 lg:flex-1' rows='8' id="text"></textarea>
          <button className='min-h-11 rounded-sm bg-green-500 p-2 hover:bg-green-600'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
