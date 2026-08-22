import React from 'react'

const Header = (props) => {

  const logOutuser = ()=>{
    localStorage.removeItem('loggedinUser')
    props.changeuser(null)
  }
  return (
    <div className='flex flex-wrap items-start justify-between gap-4'>
        <h1 className='min-w-0 text-xl font-medium sm:text-2xl'>Hello <br/> <span className='break-words text-2xl font-semibold sm:text-3xl'>{props.data?.name || "Admin"} 👋🏻</span></h1>
        <button onClick={logOutuser} className='min-h-11 shrink-0 rounded bg-red-500 px-4 py-2 text-base hover:bg-red-600 sm:text-lg'>Log Out</button>
    </div>
  )
}

export default Header
