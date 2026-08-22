import React from 'react'

const FailedTask = ({data}) => {
  return (
        <div className='flex min-h-80 w-[min(20rem,calc(100vw-2rem))] shrink-0 snap-start flex-col rounded-2xl bg-pink-500 p-4 sm:p-5'>
            <div className='flex min-w-0 items-center justify-between gap-2'>
                <h3 className='max-w-[65%] truncate rounded bg-red-500 px-3 py-1 text-sm sm:px-4'>{data.category}</h3>
                <h4 className='shrink-0 text-xs'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 mb-1 break-words text-lg font-semibold sm:text-xl' >{data.task_title}</h2>
            <div id='Task' className='min-h-0 flex-1 overflow-y-auto'>
                <p className='break-words text-sm'>{data.task_description}</p>
            </div>
            <div className='mt-5 w-full'>
                <h3 className='min-h-10 rounded bg-red-700 px-2 py-2 text-center text-sm font-medium'>Failed</h3>
            </div>
        </div>
  )
}

export default FailedTask
