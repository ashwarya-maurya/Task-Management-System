import React from 'react'

const Header = (props) => {

  const logOutuser = ()=>{
    localStorage.removeItem('loggedinUser')
    props.changeuser(null)
  }
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.data?.name || "Admin"} 👋🏻</span></h1>
        <button onClick={logOutuser} className='bg-red-500 px-4 py-1 text-lg rounded hover:bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header