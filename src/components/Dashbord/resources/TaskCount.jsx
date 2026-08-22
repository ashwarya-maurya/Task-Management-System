import React from 'react'

const TaskCount = ({data}) => {

  return (
    <div className='mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
        <div className='rounded-xl bg-red-400 px-5 py-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-semibold sm:text-3xl'>{data.task_numbers.failed}</h2>
            <h3 className='text-base font-semibold sm:text-xl'>Failed Task</h3>
        </div>
        <div className='rounded-xl bg-blue-400 px-5 py-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-semibold sm:text-3xl'>{data.task_numbers.new}</h2>
            <h3 className='text-base font-semibold sm:text-xl'>New Task</h3>
        </div>
        <div className='rounded-xl bg-green-400 px-5 py-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-semibold sm:text-3xl'>{data.task_numbers.completed}</h2>
            <h3 className='text-base font-semibold sm:text-xl'>Completed Task</h3>
        </div>
        <div className='rounded-xl bg-yellow-400 px-5 py-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-semibold sm:text-3xl'>{data.task_numbers.active}</h2>
            <h3 className='text-base font-semibold sm:text-xl'>Accepted Task</h3>
        </div>
    </div>
  )
}

export default TaskCount
