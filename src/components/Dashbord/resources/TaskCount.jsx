import React from 'react'

const TaskCount = ({data}) => {

  return (
    <div className='mt-5 flex justify-between gap-5'>
        <div className='px-8 py-4 w-[25%] bg-red-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.task_numbers.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>
        <div className='px-8 py-4 w-[25%] bg-blue-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.task_numbers.new}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='px-8 py-4 w-[25%] bg-green-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.task_numbers.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='px-8 py-4 w-[25%] bg-yellow-400 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.task_numbers.active}</h2>
            <h3 className='text-xl font-semibold'>Accepted Task</h3>
        </div>
    </div>
  )
}

export default TaskCount