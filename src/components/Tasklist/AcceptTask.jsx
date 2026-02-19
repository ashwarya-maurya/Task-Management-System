import React from 'react'

const AcceptTask = ({data}) => {
  return (
        <div className='p-5 h-80 w-80 bg-amber-500 rounded-2xl shrink-0 flex flex-col'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-500 px-4 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-xs'>{data.task_date}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-5 mb-1' >{data.task_title}</h2>
            <div id='Task' className='overflow-y-auto'>
                <p className='text-sm'>{data.task_description}</p>
            </div>
            <div className='mt-5 w-full h-10 flex justify-between'>
                <button className='bg-green-600 text-sm font-medium m-1 px-2 py-1 rounded hover:bg-green-700 cursor-pointer'>Mark as Completed</button>
                <button className='bg-red-600 text-sm font-medium m-1 px-2 py-1 rounded hover:bg-red-700 cursor-pointer'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask