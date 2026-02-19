import React, { useState } from 'react'

const Login = ({LoginHandler}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        LoginHandler(email,password)
        setemail('')
        setpassword('')
    }


  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='border-3 flex flex-col border-blue-600 rounded-2xl py-14 px-12 justify-center items-center'>
            <input 
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            required className='border-2 outline-none rounded-full px-8 py-4 m-2 border-blue-400' type="email" placeholder='Enter your email' />
            <input 
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            required className='border-2 outline-none rounded-full px-8 py-4 m-2 border-blue-400' type="password" placeholder='Enter Password' />
            <button className='bg-blue-600 rounded-full w-fit px-8 py-2 mt-5 hover:bg-blue-800'>Login</button>
        </form>
    </div>
  )
}

export default Login