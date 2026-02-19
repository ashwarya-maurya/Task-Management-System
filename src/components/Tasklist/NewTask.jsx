import React from 'react'

const NewTask = ({data}) => {
  return (
        <div className='p-5 h-80 w-80 bg-cyan-500 rounded-2xl shrink-0 flex flex-col'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-500 px-4 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-xs'>{data.task_date}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-5 mb-1' >{data.task_title}</h2>
            <div id='Task' className='overflow-y-auto'>
                <p className='text-sm'>{data.task_description}</p>
            </div>
            <div className='mt-5 w-full h-10'>
                <button className='bg-blue-600 w-full text-sm font-medium m-1 px-2 py-1 rounded hover:bg-blue-700 cursor-pointer'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask