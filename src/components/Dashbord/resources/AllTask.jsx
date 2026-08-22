import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {

  const {userdata} = useContext(AuthContext)

  return (
    <div className='mt-2 rounded-lg bg-stone-900 p-3 sm:p-4'>
      <div className='overflow-x-auto pb-1'>
      <div className='min-w-[600px]'>
      <div className='mb-2 grid grid-cols-[minmax(9rem,1.5fr)_repeat(4,minmax(5.5rem,1fr))] items-center rounded bg-emerald-950 p-2 text-center text-xs font-medium sm:text-sm'>
                <h2>Employee</h2>
                <h2>New Task</h2>
                <h2>Active Task</h2>
                <h2>Completed Task</h2>
                <h2>Failed Task</h2>
      </div>
      <div id='Task' className='max-h-[min(40vh,24rem)] overflow-y-auto text-center'>
      {userdata.employees.map((e ,idx)=>{ 
       return <div key={idx} className='mb-2 grid grid-cols-[minmax(9rem,1.5fr)_repeat(4,minmax(5.5rem,1fr))] items-center rounded border-2 border-emerald-700 p-2 text-base font-medium sm:text-lg'>
                <h2 className='break-words'>{e.name}</h2>
                <h2 className='text-blue-400'>{e.task_numbers.new}</h2>
                <h2 className='text-yellow-400'>{e.task_numbers.active}</h2>
                <h2 className='text-green-400'>{e.task_numbers.completed}</h2>
                <h2 className='text-red-400'>{e.task_numbers.failed}</h2>
              </div>  
      })}
      </div>
      </div>
      </div>
    </div>
  )
}

export default AllTask
