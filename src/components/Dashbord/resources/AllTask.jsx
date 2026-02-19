import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {

  const {userdata} = useContext(AuthContext)

  return (
    <div id='Task' className='bg-stone-900 mt-2 p-4 rounded-lg h-[35%]'>
      <div className='bg-emerald-950 flex items-center justify-between p-2 rounded mb-2 text-sm font-medium text-center'>
                <h2 className=''>Employee</h2>
                <h2 className=''>New Task</h2>
                <h2 className=''>Active Task</h2>
                <h2 className=''>Completed Task</h2>
                <h2 className=''>Failed Task</h2> 
      </div>
      <div id='Task' className='text-center h-[80%] overflow-auto'>
      {userdata.employees.map((e ,idx)=>{ 
       return <div key={idx} className='border-2 border-emerald-700 flex items-center justify-between p-2 rounded mb-2 text-lg font-medium'>
                <h2>{e.name}</h2>
                <h2 className='text-blue-400'>{e.task_numbers.new}</h2>
                <h2 className='text-yellow-400'>{e.task_numbers.active}</h2>
                <h2 className='text-green-400'>{e.task_numbers.completed}</h2>
                <h2 className='text-red-400'>{e.task_numbers.failed}</h2>
              </div>  
       })}
      </div>
    </div>
  )
}

export default AllTask