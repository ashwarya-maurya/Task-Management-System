import React from 'react'

const AcceptTask = ({data}) => {
  return (
        <div className='flex min-h-80 w-[min(20rem,calc(100vw-2rem))] shrink-0 snap-start flex-col rounded-2xl bg-amber-500 p-4 sm:p-5'>
            <div className='flex min-w-0 items-center justify-between gap-2'>
                <h3 className='max-w-[65%] truncate rounded bg-red-500 px-3 py-1 text-sm sm:px-4'>{data.category}</h3>
                <h4 className='shrink-0 text-xs'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 mb-1 break-words text-lg font-semibold sm:text-xl' >{data.task_title}</h2>
            <div id='Task' className='min-h-0 flex-1 overflow-y-auto'>
                <p className='break-words text-sm'>{data.task_description}</p>
            </div>
            <div className='mt-5 grid w-full grid-cols-1 gap-2 sm:grid-cols-2'>
                <button className='min-h-10 rounded bg-green-600 px-2 py-1 text-sm font-medium hover:bg-green-700 cursor-pointer'>Mark as Completed</button>
                <button className='min-h-10 rounded bg-red-600 px-2 py-1 text-sm font-medium hover:bg-red-700 cursor-pointer'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask
